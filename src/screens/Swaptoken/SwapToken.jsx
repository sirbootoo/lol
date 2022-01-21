import React, { useEffect, useCallback, useState } from "react"; import "./swaptoken.css";
import {
  Card,
  Menu,
  Dropdown,
  Tooltip,
  Modal,
  Switch,
  Checkbox,
  Input,
  Select,
} from "antd";
import {
  SettingOutlined,
  SyncOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
  WarningOutlined,
  DownOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

import GlobalExpertModel from '../../component/GlobalExpertModel';
import GlobalModel from '../../component/GlobalModel';
import { FACTORY_ADDRESS } from '../../contract/factory'
import { Spin } from 'antd';
import { WBNB_ADDRESS } from '../../contract/staticData'
import { loadBlockchain } from "../../store/asyncActions";
import coin from "../../images/coin.png";
import { swapExactTokenForTokens, approve, SidebarAction, getAmountOut } from '../../store/asyncActions';
import { navigationAction } from '../../store/actions';
import { useStore } from '../../context/GlobalState';
import { ERC20_ABI } from '../../contract/ERC20ABI';
import { ROUTER_ADDRESS } from '../../contract/routeContract';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConnectModel from "../../component/ConnectModel";
import { PAIR_ABI } from '../../contract/pairAbi';

const SwapToken = () => {
  const [{ web3, accounts, collapsed, contract, jindoAdminContract, factoryContract, pairsList, tokensList, routerContract }, dispatch] = useStore();


  // console.log("props", collapsed) 
  //  Get navigation from localStorage

  const navigation = window.localStorage.getItem("navBar");

  const [checkClasses, setcheckClasses] = useState("row From")
  // console.log("factoryContractfactoryContractfactoryContract", factoryContract)
  // console.log(navigation) 
  const [navx, setNavx] = useState()
  useEffect(() => {
    if (navigation) {
      setNavx(navigation)
    }
  }, [navigation])


  const [classx, setClasses] = useState("row From")

  useEffect(() => {
    if (navx) {
      setClasses("row Fromx")
    }
  }, [navx])

  // console.log(navx);

  // console.log(classx)
  // Line 331  if(navigation ) true hai to per  class modelResPop ye ho wrna  ye  modelPopup
  // is me ye kam ho rha hai k jab  ye true hai per to ye modelResPop sahe kam kar rha hai per jab 
  // false ho jay to per ye kam nhi kar rha hai os time pe ye class modelPopup hone chahye condition k mutabik



  const { Option } = Select;

  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false)
    }, 1000);
  }, [])



  const CustomToastWithLink = (txHash) => {
    console.log("receipt", txHash)
    return (
      <div>
        <a target="_blank" href={`https://testnet.bscscan.com/tx/${txHash}`}>See your transasction here</a>
      </div>
    )
  }
  const SwapToastWithLink = (message, txHash) => {
    console.log("receipt", txHash)
    return (
      <div>
        <a style={{ color: "white" }} >{message}
          <br />
          <a style={{ color: "white" }} target="_blank" href={`https://testnet.bscscan.com/tx/${txHash}`}> View Transaction</a>
        </a>
      </div>
    )
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  // Export Model
  const [isExportModalVisible, setIsExportModalVisible] = useState(false);
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
  const [isSearchModalVisible2, setIsSearchModalVisible2] = useState(false);
  const [walletModalVisible, setwalletModalVisible] = useState(false);

  const [isSwap, setIsSwap] = useState(false);

  const swapCurrent = () => {
    setIsSwap(!isSwap);
  }


  const showConnectwallet = () => {
    setwalletModalVisible(true)
  }
  const cancelConnectwallet = () => {
    setwalletModalVisible(false)
  }

  const showExportModel = () => {
    // setIsExportModalVisible(true);
  };

  const exportSwitch = () => {
    setIsExportModalVisible(true);
    setIsModalVisible(false);
  };

  const showModel = () => {
    setIsModalVisible(true);
  };

  const showSearchModel = () => {
    setIsSearchModalVisible(true);
  };

  const showSearchModel2 = () => {
    setIsSearchModalVisible2(true);
  };



  const handleSearchModeCancel2 = () => {
    setIsSearchModalVisible2(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEpertModeCancel = () => {
    setIsModalVisible(true);
    setIsExportModalVisible(false);
  };



  const handleSearchModeCancel = () => {
    setIsSearchModalVisible(false);
    setIsExportModalVisible(false);
  };

  const [isBtnActive, setisBtnActive] = useState(true);

  const changeActionBtn = () => {
    setisBtnActive(!isBtnActive);
  };



  // --------------------------Currency Code here--------------------------------

  const currencyObj = [
    {
      id: 1,
      currencyImg: coin,
      currencyTitle: "WBBNB",
      currencyDes: "WBBNB",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
    },
    {
      id: 2,
      currencyImg: coin,
      currencyTitle: "BUSD ",
      currencyDes: "BUSD ",
      address: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
    },
    {
      id: 3,
      currencyImg: coin,
      currencyTitle: "DAI",
      currencyDes: "DAI",
      address: "0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867"
    },
    {
      id: 4,
      currencyImg: coin,
      currencyTitle: "SANTA",
      currencyDes: "SANTA",
      address: "0x27B2822CF3567C8EB315C31E6472a860f125e590"
    },
  ];


  const currencyObj2 = [
    {
      id: 1,
      currencyImg: coin,
      currencyTitle: "WBBNB",
      currencyDes: "WBBNB",
      address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
    },
    {
      id: 2,
      currencyImg: coin,
      currencyTitle: "BUSD ",
      currencyDes: "BUSD ",
      address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee"
    },
    {
      id: 3,
      currencyImg: coin,
      currencyTitle: "ALPACA",
      currencyDes: "ALPACA",
      address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F"
    },
    {
      id: 4,
      currencyImg: coin,
      currencyTitle: "SANTA",
      currencyDes: "SANTA",
      address: "0x4F1A6FC6A7B65Dc7ebC4EB692Dc3641bE997c2F2"
    },
  ];


  let [currency, setCurrency] = useState(currencyObj[0]);
  let [currency2, setCurrency2] = useState(currencyObj2[0]);
  let [fromValue, setfromValue] = useState(currencyObj[0]);
  let [fromValue2, setfromValue2] = useState(currencyObj2[0]);
  let [approveFromToggle, setApproveFromToggle] = useState(false)
  let [fromApproveAmount, setFromApproveAmount] = useState()

  //to
  let [toValue, setToValue] = useState(currencyObj2[0])
  let [toApproveAmount, setToApproveAmount] = useState()

  let [fromInputValue, setFromInputValue] = useState();
  let [toInputValue, setToInputValue] = useState();


  // console.log(currency);

  const selectCurrency = item => () => {
    // console.log("item",item);
    // fromValue(item)

    setfromValue(item);
    setIsSearchModalVisible(false)
    setCurrency(item);
  };


  // console.log(fromValue);
  // console.log(fromValue2);

  const selectCurrency2 = item => async() => {
    // console.log("item22",item);
    // fromValue2(item)
    setToValue(item);
    setCurrency2(item);

    setIsSearchModalVisible2(false)
    let fromReserves, amountIn, todecimal = 0;
    let getPairAddress = await factoryContract.methods.getPair(fromValue.address, toValue.address).call();
    const pairContract = new web3.eth.Contract(PAIR_ABI, getPairAddress);
    console.log("pairContract", pairContract)

    let getReserves = await pairContract.methods.getReserves().call();
    console.log("getReserves", getReserves)

    let amountOut = parseFloat(getAmountOut(amountIn, getReserves._reserve0, getReserves._reserve1)) / 10 ** todecimal;
    console.log("amountOut", amountOut)
    setToInputValue(amountOut);


  };


  const handleFromApprove = async () => {
    console.log("fromValue", fromValue)
    if (web3) {
      const fromContract = new web3.eth.Contract(ERC20_ABI, fromValue.address);
      console.log("fromContract", fromContract)
      try {
        let receipt = await approve(web3, fromContract, ROUTER_ADDRESS, accounts, dispatch);
        console.log("receipt", receipt)
        console.log("receipt", receipt.transactionHash)
        if (!receipt) throw receipt
        console.log("receiptreceipt", receipt)
        setApproveFromToggle(true);
        toast.success(CustomToastWithLink(receipt.transactionHash));
        const checkAllowance = await fromContract.methods.allowance(accounts[0], ROUTER_ADDRESS).call();
        setFromApproveAmount(checkAllowance);

      }
      catch (error) {

        // toast.error(CustomToastWithLink(error.transactionHash));
        console.log("false", error)
      }
    }
    else {
      // setApproveFromToggle(false);
      // alert("From Not selected");
    }
  }



  const handleSwap = async () => {
    console.log("toInputValue", toInputValue);
    console.log("handleSwap", web3, routerContract, fromInputValue, fromValue, toValue, accounts);

    if (web3 && routerContract && fromInputValue && fromValue && toValue && accounts) {

      let payload = {
        amountIn: fromValue.currencyTitle == "SANTA" ? fromInputValue * 10 ** 9 : fromInputValue * 10e17,
        amountOutMin: 0,
        token0: fromValue.address,
        token1: toValue.address,
        to: accounts[0],
        deadline: Math.floor(Date.now() / 1000) + (60 * 60 * 24)

      }
      console.log("before calling swap", payload);

      const response = await swapExactTokenForTokens(web3, routerContract, payload, accounts);
      if (!response) throw "Failed"
      toast.success(SwapToastWithLink(`Swapped ${fromInputValue} ${fromValue.symbol}, with ${toInputValue} ${toValue.symbol}`, response.transactionHash));

      console.log("response", response);
    } else {
      alert("Payload incomplete");
    }

  }

  const handleMetaMask = useCallback(async () => {
    loadBlockchain(dispatch);
  }, []);
  // -------------x-------------Currency Code here---------------x-----------------


  const handleFromChange = async (e) => {
    try {
      setFromInputValue(e);

      if (fromValue.address && toValue.address) {
        // let fromReserves, amountIn, todecimal = 0;
        // let getPairAddress = await factoryContract.methods.getPair(fromValue.address, toValue.address).call();
        // const pairContract = new web3.eth.Contract(PAIR_ABI, getPairAddress);
        // console.log("pairContract", pairContract)

        // let getReserves = await pairContract.methods.getReserves().call();
        // console.log("getReserves", getReserves)

        // let amountOut = parseFloat(getAmountOut(amountIn, getReserves._reserve0, getReserves._reserve1)) / 10 ** todecimal;
        // console.log("amountOut", amountOut)
        // setToInputValue(amountOut);
      }
    } catch (error) {
      console.log("Error in Amount calculation", error);
      setToInputValue(0);
    }

  };



  return (
    <>
      {/*----------------------- Export Model----------------------- */}
      <GlobalExpertModel isExportModalVisible={isExportModalVisible} handleEpertModeCancel={handleEpertModeCancel} collapsed={collapsed} />



      <GlobalModel isModalVisible={isModalVisible} setIsExportModalVisible={setIsExportModalVisible} setIsModalVisible={setIsModalVisible} handleCancel={handleCancel} collapsed={collapsed} />




      {/*----------------------- Search Model One----------------------- */}
      <Modal
        title={
          <>
            <div className="d-flex   ">
              <p className="exportModeTitle"> Selelct Tokens</p>
            </div>
          </>
        }
        visible={isSearchModalVisible}
        onCancel={handleSearchModeCancel}
        className={collapsed ? "modelResPop" : "modelPopup"}
      >
        <div className="row">
          <ul>
            <div className="col-lg-12">
              {currencyObj &&
                currencyObj.map((item) => (
                  <>
                    <li
                      className="currencyLi"
                      onClick={selectCurrency(item)}
                    >
                      <div className="d-flex p-4">
                        <img
                          src={item.currencyImg}
                          width="25"
                          height="25"
                          alt=""
                        />
                        <div
                          className="d-flex flex-column "
                          style={{ marginTop: "-0.5rem" }}
                        >
                          <h5 className="ms-2 text-white">
                            {item.currencyTitle}
                          </h5>
                          <p className="ms-2   currencyDes">
                            {item.currencyDes}
                          </p>
                        </div>
                      </div>
                    </li>
                  </>
                ))}
            </div>
          </ul>
        </div>
      </Modal>

      {/*----------x------------- Search Model One------------x----------- */}



      {/*----------x------------- Export Model Two------------x----------- */}

      {/*----------------------- Search Model Two----------------------- */}
      <Modal
        title={
          <>
            <div className="d-flex   ">
              <p className="exportModeTitle"> TO</p>
            </div>
          </>
        }
        visible={isSearchModalVisible2}
        onCancel={handleSearchModeCancel2}
        className={collapsed ? "modelResPop" : "modelPopup"}
      >
        <div className="row">
          <ul>
            <div className="col-lg-12">
              {currencyObj2 &&
                currencyObj2.map((item) => (
                  <>
                    <li
                      className="currencyLi"
                      onClick={selectCurrency2(item)}
                    >
                      <div className="d-flex p-4">
                        <img
                          src={item.currencyImg}
                          width="25"
                          height="25"
                          alt=""
                        />
                        <div
                          className="d-flex flex-column "
                          style={{ marginTop: "-0.5rem" }}
                        >

                          <h5 className="ms-2 text-white">
                            {item.currencyTitle}
                          </h5>
                          <p className="ms-2   currencyDes">
                            {item.currencyDes}
                          </p>
                        </div>
                      </div>
                    </li>
                  </>
                ))}
            </div>
          </ul>
        </div>
      </Modal>

      {/*----------x------------- Search Model Two------------x----------- */}


      {/*----------------------- Connect----------------------- */}
      <ConnectModel walletModalVisible={walletModalVisible} cancelConnectwallet={cancelConnectwallet} collapsed={collapsed} />
      {/*----------x------------- Connect-----------x----------- */}


      {showSpinner ? <Spin style={{ marginTop: '30rem', marginLeft: '50rem', background: 'black !important' }} /> :
        <div className="row mt-5">
          <div className={collapsed ? "col-lg-6  offset-md-0 offset-sm-0 offset-lg-4 my-5  swapTokenX " :"col-lg-6  offset-md-0 offset-sm-0 offset-lg-4 my-5 swapToken  " } >
            <Card
              title={
                <>
                  <h5 className="titleHeading">Exchange </h5>
                  <p className="paratitle">Trade tokens in an instant</p>
                </>
              }
            // extra={
            //   <>

            //     <SettingOutlined
            //       className="menuIconSetting"
            //       onClick={showModel}
            //     />


            //     <SyncOutlined className="menuIconReset" onClick={showConnectwallet} />

            //   </>
            // }

            >
              <div className="row">
                <div className="col-lg-12  ">
                  {isSwap ? " " : " "}
                  <div className="row From">
                    <div className="col-lg-8 col-sm-8 col-8 ">
                      <p>Form</p>
                      <Input value={isSwap ? toInputValue : fromInputValue} onChange={(e) => handleFromChange(e.target.value)} placeholder="0.0" type="number" />
                    </div>
                    <div className="col-lg-4 col-sm-4   col-4 ">
                      <div
                        className="d-flex fromCurrency  "
                        onClick={showSearchModel}
                      >
                        {/* <button onClick={showSearchModel}>Cick</button> */}
                        <img src={isSwap ? currency2.currencyImg : currency.currencyImg} width="30" alt="" />


                        <h5 className="text-white ms-2">
                          {isSwap ? currency2.currencyTitle : currency.currencyTitle}

                        </h5>
                        <DownOutlined className=" ms-2 downCurrencyIcon" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Switch Button */}
                <div className="col-lg-12">
                  <div className="swapButton  text-center">
                    <ArrowDownOutlined className="arrowDown" onClick={swapCurrent} />
                  </div>
                </div>

                {/* To */}

                <div className="col-lg-12  ">
                  <div className="row From">
                    <div className="col-lg-8  col-sm-8 col-8">
                      <p>To</p>
                      <Input value={isSwap ? fromInputValue : toInputValue} onChange={(e) => setToInputValue(e.target.value)} placeholder="0.0" type="number" />
                    </div>
                    <div className="col-lg-4 col-sm-4 col-4  ">
                      <div
                        className="d-flex fromCurrency  "
                        onClick={showSearchModel2}
                      >
                        <img src={isSwap ? currency.currencyImg : currency2.currencyImg} width="30" alt="" />

                        <h5 className="text-white ms-2">

                          {isSwap ? currency.currencyTitle : currency2.currencyTitle}
                        </h5>
                        <DownOutlined className=" downCurrencyIcon ms-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {
                    web3 ?
                      <>
                        {
                          !approveFromToggle && fromValue.address != WBNB_ADDRESS ?
                            <button onClick={handleFromApprove} className="btn btn-block approvedBtn" >
                              Approve
                  </button>
                            :
                            <button onClick={handleSwap} className="btn btn-block approvedBtn" >
                              Swap
                </button>
                        }
                      </>
                      :
                      <button onClick={handleMetaMask} className="btn btn-block approvedBtn" >
                        Connect Wallet
                </button>

                  }

                  {/* <button onClick={handleFromChange} className="btn btn-block approvedBtn" >
                    handleFromChange
                </button> */}


                </div>

              </div>
              {/* Row Ends */}
            </Card>
          </div>
        </div>
      }
    </>
  );
};

export default SwapToken;