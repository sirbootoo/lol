import React from 'react'
import { Modal} from "antd";
const ConnectModel = ({ walletModalVisible, cancelConnectwallet,collapsed }) => {
    return (
        <div>
            <Modal
                title={
                    <>
                        <div className="d-flex   ">
                            <p className="exportModeTitle"> Connect</p>
                        </div>
                    </>
                }
                visible={walletModalVisible}
                onCancel={cancelConnectwallet}
                className= {collapsed ? "modelResPop" : "modelPopup"} 
            >
                <button className="btn approvedBtn"> Connect Wallet </button>
            </Modal>

        </div>
    )
}

export default ConnectModel
