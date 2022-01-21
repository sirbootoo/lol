import React, { useEffect, useCallback, useState } from "react";

import "./earning.css";
import icon1 from "../../images/logo1.png";
import icon2 from "../../images/icon2.png";
import { useStore } from "../../context/GlobalState";
import { Spin } from "antd";
import { BUSD_ADDRESS, SANTA_ADDRESS } from "../../contract/staticData";
import { ERC20_ABI } from "../../contract/ERC20ABI";

import CountUp from "react-countup";
import {
  getUpaidEarningsAsyn,
  sharesAsync,
  totalDistributedAsync,
  handleClaimDivident,
  loadBlockchain,
} from "../../store/asyncActions";

const Earning = () => {
  const [
    { web3, accounts, contract, jindoAdminContract, pairsList, tokensList },
    dispatch,
  ] = useStore();

  const [showSpinner, setShowSpinner] = useState(true);
  const [textToClipBoard, setTexttoClipBoard] = useState(
    "EGC Contract: 0xc001bbe2b87079294c63ece98bdd0a88d761434e"
  );

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);

  const copyToClipboard = () => {
    var textField = document.createElement("textarea");
    textField.innerText = "foo bar baz";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [totalDistributionState, setTotalDistributionState] = useState();
  const [shareCallState, setShareCallState] = useState();
  const [totalRealizedValue, settotalRealizedValue] = useState();

  let [busdBalance, setbusdBalance] = useState();
  let [santaBalance, setsantaBalance] = useState();
  let [unpaid, setunpaid] = useState();

  useEffect(async () => {
    if (web3 && contract && accounts[0]) {
      let unpaidCall = await getUpaidEarningsAsyn(contract, accounts);
      setunpaid(unpaidCall);
      console.log("unpaidCall", unpaidCall);
      let sharesCall = await sharesAsync(contract, accounts);
      console.log(
        "sharesCall",
        (sharesCall.totalRealised / 10 ** 18).toFixed(7)
      );
      settotalRealizedValue((sharesCall.totalRealised / 10 ** 18).toFixed(7));
      setShareCallState(sharesCall);
      let totalDistrubtedCall = await totalDistributedAsync(contract, accounts);
      console.log("totalDistrubtedCall", totalDistrubtedCall);
      setTotalDistributionState((totalDistrubtedCall / 10 ** 18).toFixed(7));

      let busdContract = new web3.eth.Contract(ERC20_ABI, BUSD_ADDRESS);
      let santaContract = new web3.eth.Contract(ERC20_ABI, SANTA_ADDRESS);
      let santaBalanceOf = await santaContract.methods
        .balanceOf(accounts[0])
        .call();
      let busdBalanceOf = await busdContract.methods
        .balanceOf(accounts[0])
        .call();
      setsantaBalance(
        (santaBalanceOf / 10 ** 9)
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      setbusdBalance((busdBalanceOf / 10e17).toFixed(2));

      console.log("santaBalanceOf", santaBalanceOf);
      console.log("busdBalanceOf", busdBalanceOf);
    }
  }, [web3, contract, accounts]);

  const handleClaim = async () => {
    try {
      let doClaim = await handleClaimDivident(web3, contract, accounts);
    } catch (error) {
      console.log("handleclaim error", error);
    }
  };
  console.log("totalRealizedValue", totalRealizedValue);

  const handleMetaMask = useCallback(async () => {
    loadBlockchain(dispatch);
  }, []);
  return (
    <>
      {showSpinner ? (
        <Spin style={{ marginTop: "30rem", marginLeft: "50rem" }} />
      ) : (
        <div className="row mx-4 my-4">
          <div className="col-lg-12 ">
            {/*------------------- headingDiv -------------------- */}
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="headingMain">
                  <p className="headingParagraph text-center py-2">
                    (Please make sure you are visiting ProMars.io )
                  </p>
                </div>
              </div>
            </div>
            {/* ---------xxx--------- headingDiv---------xxx--------- */}

            {/*------------------- Count Section -------------------- */}
            <section className="counterSection ">
              <div className="row ">
                <div className="col-lg-6  col-sm-12 text-center">
                  <div>
                    <h3>Your Wallet</h3>
                    <div className="wallet ms-3">
                      <h1 className="me-2">
                        {" "}
                        {santaBalance ? santaBalance : "0"}
                      </h1>
                      <img  src={icon1} alt="" width="55" height="30" />
                    </div>
                    <div className="wallet">
                      <h1 className="me-2">
                        <CountUp
                          end={busdBalance ? busdBalance : 0}
                          duration={1}
                        />
                      </h1>
                      <img src={icon2} alt="" width="30" height="30" />
                    </div>

                    <h3>Total Earned:</h3>
                    <div className="wallet">
                      <h1 className="me-2">
                        {" "}
                        {totalRealizedValue ? totalRealizedValue : 0}{" "}
                      </h1>
                      <img src={icon2} alt="" width="30" height="30" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <h3>Reward Not Claimed</h3>
                  <div className="wallet">
                    <h1 className="me-2">
                      <CountUp
                        end={unpaid ? (unpaid / 10e17).toFixed(2) : 0}
                        duration={5}
                      />
                    </h1>
                    <img src={icon2} alt="" width="30" height="30" />
                  </div>
                  {web3 ? (
                    <button onClick={handleClaim} className="btn  claimBtn">
                      CLAIM MANUALLY
                    </button>
                  ) : (
                    <button onClick={handleMetaMask} className="btn  claimBtn">
                      Connect Wallet
                    </button>
                  )}
                  <p className="earning-p">
                    Rewards are automatically sent every 60 minutes. It can,
                    however, take longer depending on your holdings and trading
                    volume. Rewards will be triggered once they are big enough
                    to cover the gas fees. If you are a smaller holder it may
                    take from a couple hours to a few days for rewards to appear
                    in your wallet. You can also manually claim unclaimed
                    rewards, but you will need to pay the gas fees.
                  </p>
                </div>
              </div>
            </section>
            {/*---------x---------- Count Section -----------x--------- */}

            {/*------------------- Reward Section -------------------- */}
            <section className="rewardSection my-3 text-center ">
              <div className="row">
                <div className="col-lg-6 mt-3">
                  <h3 className="text-white ">Reward Distributed To Holders</h3>
                  <div className="wallet">
                    <h1 className="me-2">
                      {totalDistributionState ? totalDistributionState : "00"}{" "}
                    </h1>
                    <img src={icon2} alt="" width="30" height="30" />
                  </div>
                </div>
                <div className="col-lg-6  mt-3">
                  <div className="wallet">
                    <p onClick={copyToClipboard}>
                        Contract: 0x8Be776a7c5188Ea0D1e8C933e51A0DD593A7A824
                    </p>
                    {/* <button
                    style={{
                      background: "none",
                      border: "none",
                      marginBottom: "10px",
                    }}
                  >
                    <i class="far fa-copy copyIcon"></i>
                  </button> */}
                  </div>
                  <div className="wallet">
                    <p>
                      BUSD Contract: 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56
                    </p>
                    {/* <button
                    style={{
                      background: "none",
                      border: "none",
                      marginBottom: "10px",
                    }}
                  >
                    <i class="far fa-copy copyIcon"></i>
                  </button> */}
                  </div>
                </div>
              </div>
            </section>
            {/*---------x----------  Reward Section -----------x--------- */}
          </div>
        </div>
      )}
    </>
  );
};

export default Earning;
