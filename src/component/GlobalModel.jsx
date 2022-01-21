import React ,{useState} from 'react'
import {
    
    Tooltip,
    Modal,
    Switch,
   
  } from "antd";
 
const GlobalModel = ({isModalVisible,setIsExportModalVisible,setIsModalVisible, handleCancel,collapsed}) => {

  const [isBtnActive, setisBtnActive] = useState(true);

  const changeActionBtn = () => {
    setisBtnActive(!isBtnActive);
  };



    // console.log( collapsed) 
    const exportSwitch = () => {
        setIsExportModalVisible(true);
        setIsModalVisible(false);
      };
    
    return (
        <div>
             <Modal
        title="Settings"
        visible={isModalVisible}
        onCancel={handleCancel}
        className={collapsed ? "modelResPop" : "modelPopup"} 

        //  style={{ marginLeft: "53.5rem", borderRadius: "50px !important" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <p className="modelGlobal">Global</p>
            <div
              className="darkMode"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p className="darkModeText">Dark Mode</p>
              <Switch defaultChecked disabled />
            </div>

            {/*------------------ Transition-------------------- */}
            <div className="d-flex  ">
              <p className="defaultTranistinText">
                Default Transaction Speed (GWEI){" "}
              </p>

              <Tooltip
                placement="topLeft"
                title="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."
                overlayInnerStyle={{
                  width: "350px",
                  height: "90px",
                  background: "white",
                  color: "#1f1750",
                  fontWeight: "650",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                <i className="ms-2 mt-1 far fa-question-circle"></i>
              </Tooltip>
            </div>

            {/*----------x-------- Transition------------x-------- */}

            {/*------------------ Global Tranistion Button-------------------- */}

            <div className="d-flex justify-content-around">
              <button
                className={
                  isBtnActive
                    ? "btn globalBtnStandard active"
                    : "btn globalBtnStandard"
                }
                onChange={changeActionBtn} 
              >
                Standard(5)
              </button>
              <button
                className={
                  isBtnActive
                    ? "btn globalBtnStandard active"
                    : "btn globalBtnStandard"
                }
              >
                Fast(6)
              </button>
              <button
                className={
                  isBtnActive
                    ? "btn globalBtnStandard active"
                    : "btn globalBtnStandard"
                }
              >
                Instant(7)
              </button>
            </div>
            <hr />

            {/*----------x-------- Global Tranistion Button------------x-------- */}

            {/* Model Main */}
            <p className="swapText">SWAPS & LIQUIDITY</p>

            <div className="d-flex  ">
              <p className="defaultTranistinText">Slippage Tolerance </p>

              <Tooltip
                placement="topLeft"
                title="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."
                overlayInnerStyle={{
                  width: "350px",
                  height: "90px",
                  background: "white",
                  color: "#1f1750",
                  fontWeight: "650",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                <i className="ms-2 mt-1 far fa-question-circle"></i>
              </Tooltip>
            </div>

            <div style={{ display: "flex" }}>
              <button className="btn globalBtnStandard active me-2">
                0.1%
              </button>
              <button className="btn globalBtnStandard me-2">0.5%</button>
              <button className="btn globalBtnStandard me-2">17%</button>
              <input
                type="text"
                className="btn globalBtnStandard"
                style={{ width: "80px" }}
              />
              <p className="pt-3 ms-1" style={{ fontSize: "1.2rem" }}>
                %
              </p>
            </div>

            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p className="swapText">Tx deadline (mins) </p>
              <div style={{ marginLeft: "-8rem" }}>
                <Tooltip
                  placement="topLeft"
                  title="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."
                  overlayInnerStyle={{
                    width: "350px",
                    height: "90px",
                    background: "white",
                    color: "#1f1750",
                    fontWeight: "650",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <i className="ms-2 mt-1 far fa-question-circle"></i>
                </Tooltip>
              </div>

              <input
                type="text"
                className="btn globalBtnStandard  "
                style={{ width: "60px" }}
              />
            </div>

            {/* Expert Mode */}
            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p className="swapText">Expert Mode </p>
              <div style={{ marginLeft: "-13rem" }}>
                <Tooltip
                  placement="topLeft"
                  title="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."
                  overlayInnerStyle={{
                    width: "350px",
                    height: "90px",
                    background: "white",
                    color: "#1f1750",
                    fontWeight: "650",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <i className="ms-2 mt-1 far fa-question-circle"></i>
                </Tooltip>
              </div>

              <Switch onChange={exportSwitch} />
            </div>

            {/* Disable Multihops */}

            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p className="swapText">Disable Multihops</p>
              <div style={{ marginLeft: "-10.5rem" }}>
                <Tooltip
                  placement="topLeft"
                  title="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."
                  overlayInnerStyle={{
                    width: "350px",
                    height: "90px",
                    background: "white",
                    color: "#1f1750",
                    fontWeight: "650",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <i className="ms-2 mt-1 far fa-question-circle"></i>
                </Tooltip>
              </div>

              <Switch defaultChecked />
            </div>
            {/* Floppy Sound */}

            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p className="swapText">Flippy sounds</p>
              <div style={{ marginLeft: "-12.5rem" }}>
                <Tooltip
                  placement="topLeft"
                  title="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."
                  overlayInnerStyle={{
                    width: "350px",
                    height: "90px",
                    background: "white",
                    color: "#1f1750",
                    fontWeight: "650",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <i className="ms-2 mt-1 far fa-question-circle"></i>
                </Tooltip>
              </div>

              <Switch defaultChecked />
            </div>

            {/*---------xxx------------Floopy Sound Ends Here------------xxx-------- */}
          </div>
        </div>
      </Modal>
        </div>
    )
}

export default GlobalModel
