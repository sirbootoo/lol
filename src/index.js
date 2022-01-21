import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./screens/Earning/earning.css";
import "antd/dist/antd.css";
import "antd/dist/antd.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
    GlobalProvider
} from './context/GlobalState';

ReactDOM.render( <
    GlobalProvider >
    <
    App / >
    <
    /GlobalProvider>,
    document.getElementById('root')
);