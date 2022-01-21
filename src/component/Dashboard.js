import React, {
    useState,
    useEffect
} from "react";
import {
    Layout,
    Menu
} from "antd";
import {
    Link
} from "react-router-dom";
import Header from "./Header";
import "../App.css";
import {
    BankOutlined,
    TagsOutlined,
    SnippetsOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import {
    getUpaidEarningsAsyn,
    sharesAsync,
    totalDistributedAsync,
} from "../store/asyncActions";
import useWindowDimensions from "./useDimensionhook";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Earning from "../screens/Earning/Earning";
import SwapToken from "../screens/Swaptoken/SwapToken";
import {
    useStore
} from "../context/GlobalState";
import {
    collapceAction
} from "../store/actions";

const {
    Sider,
    Content
} = Layout;
const Dashboard = () => {
    // useDimensionHooks
    const {
        width
    } = useWindowDimensions();

    // console.log(width)

    const [{
            web3,
            accounts,
            contract,
            jindoAdminContract,
            collapsed,
            pairsList,
            tokensList,
        },
        dispatch,
    ] = useStore();

    const {
        SubMenu
    } = Menu;

    const [triggersx, setTrigger] = useState(false);

    // console.log("collapsed",collapsed)

    useEffect(() => {
        if (width <= 400) {
            console.log("less than 400");
            setTrigger(true);
            dispatch(collapceAction(false));
        } else if (width <= 600) {
            setTrigger(true);
            dispatch(collapceAction(false));
        } else if (width <= 1200) {
            const element = document.querySelectorAll(
                ".ant-layout-sider .ant-layout-sider-dark"
            );
            console.log(element);
            // element.classList.add("ant-layout-sider-collapsed");

            dispatch(collapceAction(true));
            setTrigger(false);
        } else if (width <= 1450) {
            dispatch(collapceAction(true));

            setTrigger(false);
        } else {
            dispatch(collapceAction(false));
            setTrigger(false);
        }
    }, [width]);
    console.log("collapsed", collapsed);



    const toggle = () => {
        dispatch(collapceAction(!collapsed));
    };

    useEffect(async () => {
        if (web3 && contract && accounts[0]) {
            let unpaidCall = await getUpaidEarningsAsyn(contract, accounts);
            console.log("unpaidCall", unpaidCall);
            let sharesCall = await sharesAsync(contract, accounts);
            console.log("sharesCall", sharesCall);
            let totalDistrubtedCall = await totalDistributedAsync(contract, accounts);
            console.log("totalDistrubtedCall", totalDistrubtedCall);
        }
    }, [web3, contract, accounts]);

    console.log(triggersx);

    return ( <
        Router >
        <
        Layout >
        <
        Sider className = {
            triggersx && "antRes"
        }
        trigger = {
            null
        }
        collapsible collapsed = {
            collapsed
        } >
        <
        Menu theme = ""
        mode = "inline"
        defaultSelectedKeys = {
            ["1"]
        } >
        <
        Menu.Item key = "1"
        icon = { < BankOutlined / >
        } >
        <
        span > Earning < /span> <
        Link to = "/" > < /Link> <
        /Menu.Item>

        {
            /* <Menu.Item key="3" icon={<SnippetsOutlined />}>
                          <span>Swap Token </span>
                          <Link to="/swap/token"> </Link>
                        </Menu.Item> */
        } <
        Menu.Item key = "7"
        icon = { < SearchOutlined / >
        } >
        <
        a style = {
            {
                textDecoration: "none",
                color: "white"
            }
        }
        href = "https://promars.io/"
        target = "_blank" >
        Website {
            " "
        } <
        /a> { /* <Link to="/website"> </Link> */ } <
        /Menu.Item> <
        SubMenu key = "sub2"
        icon = { < TagsOutlined / >
        }
        title = "Communities" >
        <
        Menu.Item key = "6" >
        <
        a style = {
            {
                textDecoration: "none",
                color: "white"
            }
        }
        href = "https://t.me/promarsgroup"
        target = "_blank" >
        Telegram {
            " "
        } <
        /a> <
        /Menu.Item> <
        Menu.Item key = "8" > {
            " "
        } <
        a style = {
            {
                textDecoration: "none",
                color: "white"
            }
        }
        href = "https://twitter.com/promarscoin"
        target = "_blank" >
        Twitter {
            " "
        } <
        /a> <
        /Menu.Item> <
        Menu.Item key = "9" > {
            " "
        } <
        a style = {
            {
                textDecoration: "none",
                color: "white"
            }
        }
        href = "https://medium.com/@promars/promars-a-hyper-deflationary-coin-that-earns-holders-rewards-in-busd-577876dcb704"
        target = "_blank" >
        Medium {
            " "
        } <
        /a> <
        /Menu.Item> <
        /SubMenu> <
        /Menu> <
        /Sider> <
        Layout className = "site-layout" >
        <
        Header collapsed = {
            collapsed
        }
        // setCollapsed={setCollapsed}
        className = " "
        style = {
            {
                padding: 0
            }
        } >
        < /Header>

        <
        Content className = "contentx"
        style = {
            {
                minHeight: "100vh",
            }
        } >
        <
        Route path = "/"
        component = {
            Earning
        }
        exact / >
        <
        Route path = "/swap/token"
        component = {
            SwapToken
        }
        /> <
        /Content> <
        /Layout> <
        /Layout> <
        /Router>
    );
};
export default Dashboard;