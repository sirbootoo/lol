import React ,{useState,useEffect} from 'react'
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
const GlobalExpertModel = ({isExportModalVisible,handleEpertModeCancel,collapsed}) => {
   const [nav, setNav] = useState()
         
  //  console.log(collapsed) 
    // useEffect(() => {
    //     if(navigation) 
    //     {
    //       setNav(navigation)
    //     }
    // }, [navigation])


    //  console.log("Global",navigation)
    return (
        < >
            <Modal
        title={
          <>
            <div className="d-flex exportMode ">
              <ArrowLeftOutlined onClick={handleEpertModeCancel} />
              <p className="exportModeTitle">Expert Mode</p>
            </div>
          </>
        }
        visible={isExportModalVisible}
        onCancel={handleEpertModeCancel}
        className= {collapsed ? "modelResPop" : "modelPopup"} 

      >
        <div className="row">
          <div className="col-lg-12">
            {/* Warning Div */}

            <div className="warning d-flex">
              {/* <WarningOutlined className="" /> */}
              <i class="fas fa-exclamation-triangle mt-2  warningIcon"></i>
              <p className="warningText mx-4  ">
                Expert mode turns off the 'Confirm' transaction prompt, and
                allows high slippage trades that often result in bad rates and
                lost funds.
              </p>
            </div>
            <p className="warningInfo">
              Only use this mode if you know what you’re doing.
            </p>
            <Checkbox>Don't Show this again</Checkbox>
            <div>
              <button className="exportModeOnBtn  btn mt-3 ">
                Turn on Expert Mode
              </button>
            </div>

            <button className="exportModeOnCancelBtn  btn mt-3 ">Cancel</button>
          </div>
        </div>

        {/*---------xxx------------Floopy Sound Ends Here------------xxx-------- */}
      </Modal>

        </ >
    )
}

export default GlobalExpertModel
