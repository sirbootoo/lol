import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import SwapToken from "../screens/Swaptoken/SwapToken";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import logo1 from '../images/logo1.png'
import {collapceAction} from '../store/actions'
import { useStore } from '../context/GlobalState';
import {loadBlockchain} from '../store/asyncActions';


const Header = () => {
  const [{ web3, collapsed,pairsList, tokensList }, dispatch] = useStore();

  const toggle = () => {
    dispatch(collapceAction(!collapsed))

  };

  console.log("headercollapsed",collapsed)
 
  const handleMetaMask = useCallback(async () => {
    loadBlockchain(dispatch);
  }, []);
  return (
    <>
      {/* I want to pass collapsed as a props to swapToken props as passed but swapScreen is showing along with  header */}
      {/* <SwapToken collapsed={collapsed}/> */}

      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbarHeader ">
          <div className="container-fluid ">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
            
            <Link to="/" className=" "     >
              <img src={logo1} width="100" alt="" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  navbarUl ms-auto mb-2 mb-lg-0 me-lg-5  ">
                <li className="nav-item">
                  {
                    !web3?
                    <button onClick={handleMetaMask} className="nav-link  claimBtn ">CONNECT WALLET</button>
                    :
                    <span className="nav-link  claimBtn ">CONNECTED</span>


                  }
                  {/* <Link aria-current="page" to="/about"></Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
// export {navFunHeader}
export default Header