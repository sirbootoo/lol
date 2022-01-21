(this.webpackJsonpsantaapp = this.webpackJsonpsantaapp || []).push([
    [0], {
        250: function(e, t, n) {},
        363: function(e, t, n) {},
        395: function(e, t, n) {},
        396: function(e, t, n) {},
        477: function(e, t) {},
        480: function(e, t) {},
        481: function(e, t) {},
        485: function(e, t) {},
        486: function(e, t) {},
        511: function(e, t) {},
        513: function(e, t) {},
        524: function(e, t) {},
        526: function(e, t) {},
        536: function(e, t) {},
        538: function(e, t) {},
        555: function(e, t) {},
        589: function(e, t) {},
        590: function(e, t) {},
        659: function(e, t) {},
        661: function(e, t) {},
        666: function(e, t) {},
        668: function(e, t) {},
        675: function(e, t) {},
        687: function(e, t) {},
        690: function(e, t) {},
        695: function(e, t) {},
        756: function(e, t) {},
        807: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                i = n.n(a),
                s = n(36),
                r = n.n(s),
                c = (n(395), n(250), n(15)),
                l = n.n(c),
                o = n(33),
                u = n(3),
                p = n(815),
                d = n(821),
                y = n(107),
                m = (n(396), n(818)),
                b = n(819),
                j = n(816),
                T = n(817),
                h = n(387),
                x = n(824),
                O = n(820),
                f = n(823),
                g = n(2),
                v = function(e) {
                    var t = e.isExportModalVisible,
                        n = e.handleEpertModeCancel,
                        i = e.collapsed,
                        s = Object(a.useState)(),
                        r = Object(u.a)(s, 2);
                    r[0], r[1];
                    return Object(g.jsx)(g.Fragment, {
                        children: Object(g.jsx)(b.a, {
                            title: Object(g.jsx)(g.Fragment, {
                                children: Object(g.jsxs)("div", {
                                    className: "d-flex exportMode ",
                                    children: [Object(g.jsx)(f.a, {
                                        onClick: n
                                    }), Object(g.jsx)("p", {
                                        className: "exportModeTitle",
                                        children: "Expert Mode"
                                    })]
                                })
                            }),
                            visible: t,
                            onCancel: n,
                            className: i ? "modelResPop" : "modelPopup",
                            children: Object(g.jsx)("div", {
                                className: "row",
                                children: Object(g.jsxs)("div", {
                                    className: "col-lg-12",
                                    children: [Object(g.jsxs)("div", {
                                        className: "warning d-flex",
                                        children: [Object(g.jsx)("i", {
                                            class: "fas fa-exclamation-triangle mt-2  warningIcon"
                                        }), Object(g.jsx)("p", {
                                            className: "warningText mx-4  ",
                                            children: "Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds."
                                        })]
                                    }), Object(g.jsx)("p", {
                                        className: "warningInfo",
                                        children: "Only use this mode if you know what you\u2019re doing."
                                    }), Object(g.jsx)(O.a, {
                                        children: "Don't Show this again"
                                    }), Object(g.jsx)("div", {
                                        children: Object(g.jsx)("button", {
                                            className: "exportModeOnBtn  btn mt-3 ",
                                            children: "Turn on Expert Mode"
                                        })
                                    }), Object(g.jsx)("button", {
                                        className: "exportModeOnCancelBtn  btn mt-3 ",
                                        children: "Cancel"
                                    })]
                                })
                            })
                        })
                    })
                },
                w = n(822),
                A = n(384),
                M = function(e) {
                    var t = e.isModalVisible,
                        n = e.setIsExportModalVisible,
                        i = e.setIsModalVisible,
                        s = e.handleCancel,
                        r = e.collapsed,
                        c = Object(a.useState)(!0),
                        l = Object(u.a)(c, 2),
                        o = l[0],
                        p = l[1];
                    return Object(g.jsx)("div", {
                        children: Object(g.jsx)(b.a, {
                            title: "Settings",
                            visible: t,
                            onCancel: s,
                            className: r ? "modelResPop" : "modelPopup",
                            children: Object(g.jsx)("div", {
                                className: "row",
                                children: Object(g.jsxs)("div", {
                                    className: "col-lg-12",
                                    children: [Object(g.jsx)("p", {
                                        className: "modelGlobal",
                                        children: "Global"
                                    }), Object(g.jsxs)("div", {
                                        className: "darkMode",
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [Object(g.jsx)("p", {
                                            className: "darkModeText",
                                            children: "Dark Mode"
                                        }), Object(g.jsx)(w.a, {
                                            defaultChecked: !0,
                                            disabled: !0
                                        })]
                                    }), Object(g.jsxs)("div", {
                                        className: "d-flex  ",
                                        children: [Object(g.jsxs)("p", {
                                            className: "defaultTranistinText",
                                            children: ["Default Transaction Speed (GWEI)", " "]
                                        }), Object(g.jsx)(A.a, {
                                            placement: "topLeft",
                                            title: "Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.",
                                            overlayInnerStyle: {
                                                width: "350px",
                                                height: "90px",
                                                background: "white",
                                                color: "#1f1750",
                                                fontWeight: "650",
                                                borderRadius: "20px",
                                                padding: "10px"
                                            },
                                            children: Object(g.jsx)("i", {
                                                className: "ms-2 mt-1 far fa-question-circle"
                                            })
                                        })]
                                    }), Object(g.jsxs)("div", {
                                        className: "d-flex justify-content-around",
                                        children: [Object(g.jsx)("button", {
                                            className: o ? "btn globalBtnStandard active" : "btn globalBtnStandard",
                                            onChange: function() {
                                                p(!o)
                                            },
                                            children: "Standard(5)"
                                        }), Object(g.jsx)("button", {
                                            className: o ? "btn globalBtnStandard active" : "btn globalBtnStandard",
                                            children: "Fast(6)"
                                        }), Object(g.jsx)("button", {
                                            className: o ? "btn globalBtnStandard active" : "btn globalBtnStandard",
                                            children: "Instant(7)"
                                        })]
                                    }), Object(g.jsx)("hr", {}), Object(g.jsx)("p", {
                                        className: "swapText",
                                        children: "SWAPS & LIQUIDITY"
                                    }), Object(g.jsxs)("div", {
                                        className: "d-flex  ",
                                        children: [Object(g.jsx)("p", {
                                            className: "defaultTranistinText",
                                            children: "Slippage Tolerance "
                                        }), Object(g.jsx)(A.a, {
                                            placement: "topLeft",
                                            title: "Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.",
                                            overlayInnerStyle: {
                                                width: "350px",
                                                height: "90px",
                                                background: "white",
                                                color: "#1f1750",
                                                fontWeight: "650",
                                                borderRadius: "20px",
                                                padding: "10px"
                                            },
                                            children: Object(g.jsx)("i", {
                                                className: "ms-2 mt-1 far fa-question-circle"
                                            })
                                        })]
                                    }), Object(g.jsxs)("div", {
                                        style: {
                                            display: "flex"
                                        },
                                        children: [Object(g.jsx)("button", {
                                            className: "btn globalBtnStandard active me-2",
                                            children: "0.1%"
                                        }), Object(g.jsx)("button", {
                                            className: "btn globalBtnStandard me-2",
                                            children: "0.5%"
                                        }), Object(g.jsx)("button", {
                                            className: "btn globalBtnStandard me-2",
                                            children: "17%"
                                        }), Object(g.jsx)("input", {
                                            type: "text",
                                            className: "btn globalBtnStandard",
                                            style: {
                                                width: "80px"
                                            }
                                        }), Object(g.jsx)("p", {
                                            className: "pt-3 ms-1",
                                            style: {
                                                fontSize: "1.2rem"
                                            },
                                            children: "%"
                                        })]
                                    }), Object(g.jsxs)("div", {
                                        className: "mt-4",
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [Object(g.jsx)("p", {
                                            className: "swapText",
                                            children: "Tx deadline (mins) "
                                        }), Object(g.jsx)("div", {
                                            style: {
                                                marginLeft: "-8rem"
                                            },
                                            children: Object(g.jsx)(A.a, {
                                                placement: "topLeft",
                                                title: "Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.",
                                                overlayInnerStyle: {
                                                    width: "350px",
                                                    height: "90px",
                                                    background: "white",
                                                    color: "#1f1750",
                                                    fontWeight: "650",
                                                    borderRadius: "20px",
                                                    padding: "10px"
                                                },
                                                children: Object(g.jsx)("i", {
                                                    className: "ms-2 mt-1 far fa-question-circle"
                                                })
                                            })
                                        }), Object(g.jsx)("input", {
                                            type: "text",
                                            className: "btn globalBtnStandard  ",
                                            style: {
                                                width: "60px"
                                            }
                                        })]
                                    }), Object(g.jsxs)("div", {
                                        className: "mt-4",
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [Object(g.jsx)("p", {
                                            className: "swapText",
                                            children: "Expert Mode "
                                        }), Object(g.jsx)("div", {
                                            style: {
                                                marginLeft: "-13rem"
                                            },
                                            children: Object(g.jsx)(A.a, {
                                                placement: "topLeft",
                                                title: "Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.",
                                                overlayInnerStyle: {
                                                    width: "350px",
                                                    height: "90px",
                                                    background: "white",
                                                    color: "#1f1750",
                                                    fontWeight: "650",
                                                    borderRadius: "20px",
                                                    padding: "10px"
                                                },
                                                children: Object(g.jsx)("i", {
                                                    className: "ms-2 mt-1 far fa-question-circle"
                                                })
                                            })
                                        }), Object(g.jsx)(w.a, {
                                            onChange: function() {
                                                n(!0), i(!1)
                                            }
                                        })]
                                    }), Object(g.jsxs)("div", {
                                        className: "mt-4",
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [Object(g.jsx)("p", {
                                            className: "swapText",
                                            children: "Disable Multihops"
                                        }), Object(g.jsx)("div", {
                                            style: {
                                                marginLeft: "-10.5rem"
                                            },
                                            children: Object(g.jsx)(A.a, {
                                                placement: "topLeft",
                                                title: "Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.",
                                                overlayInnerStyle: {
                                                    width: "350px",
                                                    height: "90px",
                                                    background: "white",
                                                    color: "#1f1750",
                                                    fontWeight: "650",
                                                    borderRadius: "20px",
                                                    padding: "10px"
                                                },
                                                children: Object(g.jsx)("i", {
                                                    className: "ms-2 mt-1 far fa-question-circle"
                                                })
                                            })
                                        }), Object(g.jsx)(w.a, {
                                            defaultChecked: !0
                                        })]
                                    }), Object(g.jsxs)("div", {
                                        className: "mt-4",
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [Object(g.jsx)("p", {
                                            className: "swapText",
                                            children: "Flippy sounds"
                                        }), Object(g.jsx)("div", {
                                            style: {
                                                marginLeft: "-12.5rem"
                                            },
                                            children: Object(g.jsx)(A.a, {
                                                placement: "topLeft",
                                                title: "Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.",
                                                overlayInnerStyle: {
                                                    width: "350px",
                                                    height: "90px",
                                                    background: "white",
                                                    color: "#1f1750",
                                                    fontWeight: "650",
                                                    borderRadius: "20px",
                                                    padding: "10px"
                                                },
                                                children: Object(g.jsx)("i", {
                                                    className: "ms-2 mt-1 far fa-question-circle"
                                                })
                                            })
                                        }), Object(g.jsx)(w.a, {
                                            defaultChecked: !0
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                N = [{
                    inputs: [{
                        internalType: "address",
                        name: "_feeToSetter",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "token0",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "token1",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "pair",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "PairCreated",
                    type: "event"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "INIT_CODE_PAIR_HASH",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "allPairs",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "allPairsLength",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "tokenA",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenB",
                        type: "address"
                    }],
                    name: "createPair",
                    outputs: [{
                        internalType: "address",
                        name: "pair",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "feeTo",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "feeToSetter",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "getPair",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "_feeTo",
                        type: "address"
                    }],
                    name: "setFeeTo",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "_feeToSetter",
                        type: "address"
                    }],
                    name: "setFeeToSetter",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                C = n(814),
                E = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                k = function(e) {
                    return {
                        type: "SETUP_WEB3",
                        payload: e
                    }
                },
                S = function(e) {
                    return {
                        type: "SETUP_FACTORY_CONTRACT",
                        payload: e
                    }
                },
                D = function(e) {
                    return {
                        type: "SETUP_CONTRACT",
                        payload: e
                    }
                },
                B = function(e) {
                    return {
                        type: "HANDLE_COLLAPSE",
                        payload: e
                    }
                },
                I = function(e) {
                    return {
                        type: "ROUTER_CONTRACT",
                        payload: e
                    }
                },
                F = function(e) {
                    return {
                        type: "ADD_ETHEREUM_ACCOUNTS",
                        payload: e
                    }
                },
                L = function(e) {
                    return {
                        type: "WEB3_LOADING_ERROR",
                        errorMessage: e
                    }
                },
                R = n(69),
                H = n.n(R),
                P = [{
                    inputs: [{
                        internalType: "address",
                        name: "_router",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [],
                    name: "claimDividend",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "deposit",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dividendsPerShare",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dividendsPerShareAccuracyFactor",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "shareholder",
                        type: "address"
                    }],
                    name: "getUnpaidEarnings",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "minDistribution",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "minPeriod",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256"
                    }],
                    name: "process",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_minPeriod",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_minDistribution",
                        type: "uint256"
                    }],
                    name: "setDistributionCriteria",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "shareholder",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "setShare",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "shares",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "totalExcluded",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "totalRealised",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalDistributed",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalDividends",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalShares",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                U = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
                V = [{
                    inputs: [{
                        internalType: "address",
                        name: "_factory",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_WETH",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [],
                    name: "WETH",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "tokenA",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenB",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountADesired",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountBDesired",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountAMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountBMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "addLiquidity",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountB",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenDesired",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "addLiquidityETH",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountToken",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "factory",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveOut",
                        type: "uint256"
                    }],
                    name: "getAmountIn",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveOut",
                        type: "uint256"
                    }],
                    name: "getAmountOut",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }],
                    name: "getAmountsIn",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }],
                    name: "getAmountsOut",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "reserveB",
                        type: "uint256"
                    }],
                    name: "quote",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountB",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "tokenA",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenB",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountAMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountBMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "removeLiquidity",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountB",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "removeLiquidityETH",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountToken",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "removeLiquidityETHSupportingFeeOnTransferTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "approveMax",
                        type: "bool"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "removeLiquidityETHWithPermit",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountToken",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountTokenMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountETHMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "approveMax",
                        type: "bool"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountETH",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "tokenA",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenB",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountAMin",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountBMin",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "approveMax",
                        type: "bool"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "removeLiquidityWithPermit",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountA",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountB",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapETHForExactTokens",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactETHForTokens",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactTokensForETH",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactTokensForTokens",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountInMax",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapTokensForExactETH",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountInMax",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "swapTokensForExactTokens",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }],
                W = n(375),
                _ = function() {
                    var e = Object(o.a)(l.a.mark((function e(t) {
                        var n, a, i, s, r;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, console.log("Web3 = ", H.a), console.log("Web3.givenProvider = ", H.a.givenProvider), t({
                                            type: "SETUP_PROVIDER",
                                            payload: H.a.givenProvider.chainId
                                        }), !H.a.givenProvider || 56 != H.a.givenProvider.chainId) {
                                        e.next = 25;
                                        break
                                    }
                                    return window.ethereum.on("accountsChanged", (function(e) {
                                        t(F(e))
                                    })), n = new H.a(H.a.givenProvider), e.next = 9, H.a.givenProvider.enable();
                                case 9:
                                    return a = new n.eth.Contract(V, U), t(k(n)), i = new n.eth.Contract(P, "0x7aE8582e17C29bF16EBB777cEfc7d54B67915f52"), t(D(i)), e.next = 15, n.eth.getAccounts();
                                case 15:
                                    s = e.sent, t(F(s)), console.log("contract", i), console.log("contract", i.methods), r = new n.eth.Contract(N, "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc"), console.log("factoryContract", r.methods), t(I(a)), t(S(r)), e.next = 26;
                                    break;
                                case 25:
                                    t(L("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"));
                                case 26:
                                    H.a.givenProvider && 56 != H.a.givenProvider.chainId && alert("please connect wallet with binance smartchain"), e.next = 33;
                                    break;
                                case 29:
                                    e.prev = 29, e.t0 = e.catch(0), console.log("Error in loading Web3 = ", e.t0), 4001 === e.t0.code && t(L(e.t0.message));
                                case 33:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 29]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                G = function() {
                    var e = Object(o.a)(l.a.mark((function e(t, n) {
                        var a;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, t.methods.getUnpaidEarnings(n[0]).call();
                                case 3:
                                    return a = e.sent, console.log("receipt", a), e.abrupt("return", a);
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), console.log("error", e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Q = function() {
                    var e = Object(o.a)(l.a.mark((function e(t, n) {
                        var a;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, t.methods.shares(n[0]).call();
                                case 3:
                                    return a = e.sent, console.log("receipt", a), e.abrupt("return", a);
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), console.log("error", e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = function() {
                    var e = Object(o.a)(l.a.mark((function e(t, n) {
                        var a;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return console.log("in total distributed", t), e.prev = 1, e.next = 4, t.methods.totalDistributed().call();
                                case 4:
                                    return a = e.sent, console.log("total distributed", a), e.abrupt("return", a);
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(1), console.log("error in Distributed", e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 9]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                q = function() {
                    var e = Object(o.a)(l.a.mark((function e(t, n, a, i) {
                        var s, r, c, o;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (console.log("payload in swap ETH", a), s = t.utils.toBN(a.amountIn), e.prev = 2, a.token0 != E && a.token1 != E) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 6, z(t, n, a, i);
                                case 6:
                                    r = e.sent, console.log("ifcondition", r), e.next = 16;
                                    break;
                                case 10:
                                    return c = [a.token0, a.token1], e.next = 13, n.methods.swapExactTokensForTokens(s, a.amountOutMin, c, a.to, a.deadline.toString()).send({
                                        from: i[0]
                                    });
                                case 13:
                                    return o = e.sent, console.log("elsecondition", o), e.abrupt("return", o);
                                case 16:
                                    e.next = 21;
                                    break;
                                case 18:
                                    e.prev = 18, e.t0 = e.catch(2), console.log("Error in Swap ETH", e.t0);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 18]
                        ])
                    })));
                    return function(t, n, a, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                z = function() {
                    var e = Object(o.a)(l.a.mark((function e(t, n, a, i) {
                        var s, r;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, s = [a.token0, a.token1], a.token0 != E) {
                                        e.next = 9;
                                        break
                                    }
                                    return r = a.amountIn.toString(), e.next = 6, n.methods.swapExactETHForTokens(a.amountOutMin, s, a.to, a.deadline).send({
                                        from: i[0],
                                        value: r
                                    });
                                case 6:
                                    e.sent, e.next = 13;
                                    break;
                                case 9:
                                    if (a.token1 != E) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 12, n.methods.swapExactTokensForETH(a.amountIn.toString(), a.amountOutMin.toString(), s, a.to, a.deadline).send({
                                        from: i[0]
                                    });
                                case 12:
                                    e.sent;
                                case 13:
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(0), console.log("error in token to EH swap", e.t0);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 15]
                        ])
                    })));
                    return function(t, n, a, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                J = function() {
                    var e = Object(o.a)(l.a.mark((function e(t, n, a, i, s) {
                        var r;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return console.log("before approve", n, a, i), e.prev = 1, e.next = 4, n.methods.approve(a, W.ethers.constants.MaxUint256).send({
                                        from: i[0]
                                    });
                                case 4:
                                    return r = e.sent, console.log(r), e.abrupt("return", r);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(1), console.log("error in approval", e.t0), e.abrupt("return", !1);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 9]
                        ])
                    })));
                    return function(t, n, a, i, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                X = function(e, t, n) {
                    if (console.log("in getAmount", e, t, n), e > 0 && t > 0 && n > 0) {
                        var a = 9975 * e,
                            i = a * n / (1e4 * t + a);
                        return console.log("AMOUNTOUT", e, t, n), console.log("AMOUNTOUT", e, t, n, i), i
                    }
                    return 0
                },
                K = function() {
                    var e = Object(o.a)(l.a.mark((function e(t, n, a) {
                        var i;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, n.methods.claimDividend().send({
                                        from: a[0]
                                    });
                                case 3:
                                    return i = e.sent, e.abrupt("return", i);
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0), console.log("error", e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                Z = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA6lBMVEUAAAD/r1D7r1D9s1D7sVH8slL9sVH8sVH8slH8slH6r1D9slL8tFD/r1D8r1D8slH9s1P3r1D8tFP9slL6r1D6slD6sVH8slD8slD9s1H7sVD7sVD8sVD8slD6sVD/sVH6slD9sVD8slH91J7/+vT////+9en+7NP+3bL8xX38wXL+4r38u2f92Kj91J3+58j8t1z92aj9xX3/9en+8d/+69P/9un+4r78vGf+3bP/+/T9yof93bP90539zpL9z5L9xXz94r3/8N7+053+58n+7NT9wHH9wXL93bL8zpL+2Kj8wHL+2aj/8d7+C6RTAAAAInRSTlMAEEBvkK/P3++/YJ9fIFDfbyBfjzBwoFBgz5Cw37+gT2DPIpQWiQAAAAFiS0dEJcMByQ8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflAwkGHwfnRvJEAAAD40lEQVRo3rWaaUPiMBCG22KhgNpF6R4seETqBcWqC1RQ2lXc0/3/f2ehgPaYZHLU9wMfIORpZiaTaRJN45JulLbMcsUiC1mVqrlVMnStKOm1eoUAKte3dwrovVQlDFUVGQaz95XMXfmHtwmX7G2p/j9YhFsSCMMmQhJENEwirLqAu/csIiHuQej7RFL7XJOvYRNp2RxmalpEQXYTNT9R1B4S/ERZzjv3zyTskUJEtVIz2/Kk69J1enZ+QSE0OePz0sXU7fUhgAVGq56Lf8/lEIiwoRmXn79cALc7gOZ0vv8akQS47jmPo6EEwQtwr3zcDR+JAsDtASspaiARgHud/7eRAtiKAPcmH0noAIQAtz4zZdjKAMBIlo4MQAzQZWU9mwfwbZjSSMALnwgHYJz9NRinAWN6IJk8AC//+wCzUXU9iYkkgNylCEG+gc5yMQfAnyRbTGlurkoDyH2yxQPFRlQLcQBmWAudZaEiAJ8peZQX4CEmIvUF4IsC4BZx8nKu6UQeECJTOXaCQQdMxwkBz9dPDcAF+zA0R7q+ylRNZ5QyrwV9fTHwvIj43pvChUG8pMbZoiwEAS0oEfnfV0b30v8fsvN1AAK+QvP40ZUAjGE7lrU2LXhiwCCKdYcCRgHljUTLvdD03QTg5nXGIoAnSiRYWu6rXhawcO58DRjNwsnmM6Vnaqxp1Nm5AYQJHzzECXSaSaN0A4GAYQYwTQCu4wEuMFeZFf+HAMDLmuhnFHkbH/Tm8VvBnKMs2gAs2jIl5uRzqpPbtLU8Bvz6HauHz4MbWpgC2fqPzESDUxHpgDVLOIoBJ+lsj6QKn5IqwGS3dGxA/OnsVYvQvIySGszxCj5OdvLpOhhxpWvGghOdJTRFCT684DCWzBmW7qMU4C+8ZAJxyg0gp1iL8qKqOFAA3GNlQZ1ZeOEAtO5YbuPp7zmCHWbxiwOGSItOXF070oA+lo1WG526NOARKyvW+wlVOcCqunlb1aBEtN6n5gFkE35w3UXrlsPNa2aFA6C0meAUABjRXBy72VIHhMzdEEcZMGcNgOYFAcAkYG/nwIEkAHhCBgBvJ/ADXuA8mtoUtBQALzwnCTVpwOSJoAZaqiUJ+HcJFhPA1nJFBgA+Pry1nHeDP8K6fw59kaOcZn5Ta0jX2Jv6Ytv7rOVZSEf0IxCniP6ZhzjOO/dfgJWO0IO6ikr3VpPjqFGBYHOdyOot2f5bvDcValKDsAQO9xsH4v2bYvcTRAdhG8Kn+iIIy5G6l8CLsEvS11B2OS4PdAxNRY0a83JIp1TAHZpG7eAY6rxdrxV4Q8cotcxqe3X9p31striv//wHex/1ZiP7ivcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMDlUMDY6MzA6NTkrMDA6MDCB5nguAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTA5VDA2OjMwOjU5KzAwOjAw8LvAkgAAAABJRU5ErkJggg==",
                $ = n(12),
                ee = n(1),
                te = function(e, t) {
                    switch (t.type) {
                        case "DELETE_TRANSACTION":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                transactions: e.transactions.filter((function(e) {
                                    return e.id !== t.payload
                                }))
                            });
                        case "ADD_TRANSACTION":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                transactions: [t.payload].concat(Object($.a)(e.transactions))
                            });
                        case "SETUP_WEB3":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                web3: t.payload,
                                web3LoadingErrorMessage: "",
                                web3Loadded: !0
                            });
                        case "SETUP_CONTRACT":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                contract: t.payload
                            });
                        case "SETUP_FACTORY_CONTRACT":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                factoryContract: t.payload
                            });
                        case "ADD_ETHEREUM_ACCOUNTS":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                accounts: t.payload
                            });
                        case "HANDLE_COLLAPSE":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                collapsed: t.payload
                            });
                        case "API_TRIGGER":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                apiTrigger: t.payload
                            });
                        case "ROUTER_CONTRACT":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                routerContract: t.payload
                            });
                        case "SETUP_PROVIDER":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                network: t.payload
                            });
                        case "WEB3_LOADING_ERROR":
                            return Object(ee.a)(Object(ee.a)({}, e), {}, {
                                web3LoadingErrorMessage: t.errorMessage,
                                web3Loadded: !1
                            });
                        default:
                            return e
                    }
                },
                ne = (n(782), {
                    transactions: [],
                    web3: null,
                    accounts: [],
                    contract: null,
                    factoryContract: null,
                    routerContract: null,
                    apiTrigger: !1,
                    apiUrl: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0
                    }).REACT_APP_API_LIVE_URL,
                    web3LoadingErrorMessage: "",
                    web3Loadded: !1,
                    collapsed: !1
                }),
                ae = Object(a.createContext)(ne),
                ie = function(e) {
                    var t = e.children,
                        n = Object(a.useReducer)(te, ne),
                        i = Object(u.a)(n, 2),
                        s = i[0],
                        r = i[1];
                    return Object(a.useEffect)((function() {
                        _(r)
                    }), []), Object(g.jsx)(ae.Provider, {
                        value: [s, r],
                        children: t
                    })
                },
                se = function() {
                    return Object(a.useContext)(ae)
                },
                re = [{
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                ce = n(249),
                le = (n(785), function(e) {
                    var t = e.walletModalVisible,
                        n = e.cancelConnectwallet,
                        a = e.collapsed;
                    return Object(g.jsx)("div", {
                        children: Object(g.jsx)(b.a, {
                            title: Object(g.jsx)(g.Fragment, {
                                children: Object(g.jsx)("div", {
                                    className: "d-flex   ",
                                    children: Object(g.jsx)("p", {
                                        className: "exportModeTitle",
                                        children: " Connect"
                                    })
                                })
                            }),
                            visible: t,
                            onCancel: n,
                            className: a ? "modelResPop" : "modelPopup",
                            children: Object(g.jsx)("button", {
                                className: "btn approvedBtn",
                                children: " Connect Wallet "
                            })
                        })
                    })
                }),
                oe = [{
                    inputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "Burn",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }],
                    name: "Mint",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0In",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1In",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0Out",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1Out",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "Swap",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint112",
                        name: "reserve0",
                        type: "uint112"
                    }, {
                        indexed: !1,
                        internalType: "uint112",
                        name: "reserve1",
                        type: "uint112"
                    }],
                    name: "Sync",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "MINIMUM_LIQUIDITY",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "PERMIT_TYPEHASH",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "burn",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "factory",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getPairData",
                    outputs: [{
                        internalType: "address",
                        name: "t0Contract",
                        type: "address"
                    }, {
                        internalType: "string",
                        name: "t0Symbol",
                        type: "string"
                    }, {
                        internalType: "uint256",
                        name: "t0decimal",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_reserve0",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "t1Contract",
                        type: "address"
                    }, {
                        internalType: "string",
                        name: "t1Symbol",
                        type: "string"
                    }, {
                        internalType: "uint256",
                        name: "t1decimal",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_reserve1",
                        type: "uint256"
                    }, {
                        internalType: "string",
                        name: "pairSymbol",
                        type: "string"
                    }, {
                        internalType: "uint256",
                        name: "pairDecimal",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "lpBalance",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "lpSupply",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getReserves",
                    outputs: [{
                        internalType: "uint112",
                        name: "_reserve0",
                        type: "uint112"
                    }, {
                        internalType: "uint112",
                        name: "_reserve1",
                        type: "uint112"
                    }, {
                        internalType: "uint32",
                        name: "_blockTimestampLast",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "_token0",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_token1",
                        type: "address"
                    }],
                    name: "initialize",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "kLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "mint",
                    outputs: [{
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "nonces",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "permit",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "price0CumulativeLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "price1CumulativeLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "skim",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "uint256",
                        name: "amount0Out",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amount1Out",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    name: "swap",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [],
                    name: "sync",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "token0",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "token1",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                ue = function() {
                    var e = se(),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        i = n.web3,
                        s = n.accounts,
                        r = n.collapsed,
                        c = (n.contract, n.jindoAdminContract, n.factoryContract),
                        p = (n.pairsList, n.tokensList, n.routerContract),
                        d = t[1],
                        y = window.localStorage.getItem("navBar"),
                        O = Object(a.useState)("row From"),
                        f = Object(u.a)(O, 2),
                        w = (f[0], f[1], Object(a.useState)()),
                        A = Object(u.a)(w, 2),
                        N = A[0],
                        k = A[1];
                    Object(a.useEffect)((function() {
                        y && k(y)
                    }), [y]);
                    var S = Object(a.useState)("row From"),
                        D = Object(u.a)(S, 2),
                        B = (D[0], D[1]);
                    Object(a.useEffect)((function() {
                        N && B("row Fromx")
                    }), [N]);
                    m.a.Option;
                    var I = Object(a.useState)(!0),
                        F = Object(u.a)(I, 2),
                        L = F[0],
                        R = F[1];
                    Object(a.useEffect)((function() {
                        setTimeout((function() {
                            R(!1)
                        }), 1e3)
                    }), []);
                    var H = Object(a.useState)(!1),
                        P = Object(u.a)(H, 2),
                        V = P[0],
                        W = P[1],
                        G = Object(a.useState)(!1),
                        Q = Object(u.a)(G, 2),
                        Y = Q[0],
                        z = Q[1],
                        K = Object(a.useState)(!1),
                        $ = Object(u.a)(K, 2),
                        ee = $[0],
                        te = $[1],
                        ne = Object(a.useState)(!1),
                        ae = Object(u.a)(ne, 2),
                        ie = ae[0],
                        ue = ae[1],
                        pe = Object(a.useState)(!1),
                        de = Object(u.a)(pe, 2),
                        ye = de[0],
                        me = de[1],
                        be = Object(a.useState)(!1),
                        je = Object(u.a)(be, 2),
                        Te = je[0],
                        he = je[1],
                        xe = Object(a.useState)(!0),
                        Oe = Object(u.a)(xe, 2),
                        fe = (Oe[0], Oe[1], [{
                            id: 1,
                            currencyImg: Z,
                            currencyTitle: "WBBNB",
                            currencyDes: "WBBNB",
                            address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                        }, {
                            id: 2,
                            currencyImg: Z,
                            currencyTitle: "BUSD ",
                            currencyDes: "BUSD ",
                            address: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
                        }, {
                            id: 3,
                            currencyImg: Z,
                            currencyTitle: "DAI",
                            currencyDes: "DAI",
                            address: "0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867"
                        }, {
                            id: 4,
                            currencyImg: Z,
                            currencyTitle: "SANTA",
                            currencyDes: "SANTA",
                            address: "0x27B2822CF3567C8EB315C31E6472a860f125e590"
                        }]),
                        ge = [{
                            id: 1,
                            currencyImg: Z,
                            currencyTitle: "WBBNB",
                            currencyDes: "WBBNB",
                            address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
                        }, {
                            id: 2,
                            currencyImg: Z,
                            currencyTitle: "BUSD ",
                            currencyDes: "BUSD ",
                            address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee"
                        }, {
                            id: 3,
                            currencyImg: Z,
                            currencyTitle: "ALPACA",
                            currencyDes: "ALPACA",
                            address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F"
                        }, {
                            id: 4,
                            currencyImg: Z,
                            currencyTitle: "SANTA",
                            currencyDes: "SANTA",
                            address: "0x4F1A6FC6A7B65Dc7ebC4EB692Dc3641bE997c2F2"
                        }],
                        ve = Object(a.useState)(fe[0]),
                        we = Object(u.a)(ve, 2),
                        Ae = we[0],
                        Me = we[1],
                        Ne = Object(a.useState)(ge[0]),
                        Ce = Object(u.a)(Ne, 2),
                        Ee = Ce[0],
                        ke = Ce[1],
                        Se = Object(a.useState)(fe[0]),
                        De = Object(u.a)(Se, 2),
                        Be = De[0],
                        Ie = De[1],
                        Fe = Object(a.useState)(ge[0]),
                        Le = Object(u.a)(Fe, 2),
                        Re = (Le[0], Le[1], Object(a.useState)(!1)),
                        He = Object(u.a)(Re, 2),
                        Pe = He[0],
                        Ue = He[1],
                        Ve = Object(a.useState)(),
                        We = Object(u.a)(Ve, 2),
                        _e = (We[0], We[1]),
                        Ge = Object(a.useState)(ge[0]),
                        Qe = Object(u.a)(Ge, 2),
                        Ye = Qe[0],
                        qe = Qe[1],
                        ze = Object(a.useState)(),
                        Je = Object(u.a)(ze, 2),
                        Xe = (Je[0], Je[1], Object(a.useState)()),
                        Ke = Object(u.a)(Xe, 2),
                        Ze = Ke[0],
                        $e = Ke[1],
                        et = Object(a.useState)(),
                        tt = Object(u.a)(et, 2),
                        nt = tt[0],
                        at = tt[1],
                        it = function(e) {
                            return function() {
                                Ie(e), te(!1), Me(e)
                            }
                        },
                        st = function(e) {
                            return Object(o.a)(l.a.mark((function t() {
                                var n, a, s, r, o;
                                return l.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return qe(e), ke(e), ue(!1), n = 0, t.next = 6, c.methods.getPair(Be.address, Ye.address).call();
                                        case 6:
                                            return a = t.sent, s = new i.eth.Contract(oe, a), console.log("pairContract", s), t.next = 11, s.methods.getReserves().call();
                                        case 11:
                                            r = t.sent, console.log("getReserves", r), o = parseFloat(X(undefined, r._reserve0, r._reserve1)) / Math.pow(10, n), console.log("amountOut", o), at(o);
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        rt = function() {
                            var e = Object(o.a)(l.a.mark((function e() {
                                var t, n, a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (console.log("fromValue", Be), !i) {
                                                e.next = 26;
                                                break
                                            }
                                            return t = new i.eth.Contract(re, Be.address), console.log("fromContract", t), e.prev = 4, e.next = 7, J(i, t, U, s, d);
                                        case 7:
                                            if (n = e.sent, console.log("receipt", n), console.log("receipt", n.transactionHash), n) {
                                                e.next = 12;
                                                break
                                            }
                                            throw n;
                                        case 12:
                                            return console.log("receiptreceipt", n), Ue(!0), ce.a.success((r = n.transactionHash, console.log("receipt", r), Object(g.jsx)("div", {
                                                children: Object(g.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://testnet.bscscan.com/tx/".concat(r),
                                                    children: "See your transasction here"
                                                })
                                            }))), e.next = 17, t.methods.allowance(s[0], U).call();
                                        case 17:
                                            a = e.sent, _e(a), e.next = 24;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e.catch(4), console.log("false", e.t0);
                                        case 24:
                                            e.next = 26;
                                            break;
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                    var r
                                }), e, null, [
                                    [4, 21]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ct = function() {
                            var e = Object(o.a)(l.a.mark((function e() {
                                var t, n;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (console.log("toInputValue", nt), console.log("handleSwap", i, p, Ze, Be, Ye, s), !(i && p && Ze && Be && Ye && s)) {
                                                e.next = 14;
                                                break
                                            }
                                            return t = {
                                                amountIn: "SANTA" == Be.currencyTitle ? Ze * Math.pow(10, 9) : 1e18 * Ze,
                                                amountOutMin: 0,
                                                token0: Be.address,
                                                token1: Ye.address,
                                                to: s[0],
                                                deadline: Math.floor(Date.now() / 1e3) + 86400
                                            }, console.log("before calling swap", t), e.next = 7, q(i, p, t, s);
                                        case 7:
                                            if (n = e.sent) {
                                                e.next = 10;
                                                break
                                            }
                                            throw "Failed";
                                        case 10:
                                            ce.a.success((a = "Swapped ".concat(Ze, " ").concat(Be.symbol, ", with ").concat(nt, " ").concat(Ye.symbol), r = n.transactionHash, console.log("receipt", r), Object(g.jsx)("div", {
                                                children: Object(g.jsxs)("a", {
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: [a, Object(g.jsx)("br", {}), Object(g.jsx)("a", {
                                                        style: {
                                                            color: "white"
                                                        },
                                                        target: "_blank",
                                                        href: "https://testnet.bscscan.com/tx/".concat(r),
                                                        children: " View Transaction"
                                                    })]
                                                })
                                            }))), console.log("response", n), e.next = 15;
                                            break;
                                        case 14:
                                            alert("Payload incomplete");
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                    var a, r
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        lt = Object(a.useCallback)(Object(o.a)(l.a.mark((function e() {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        _(d);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []),
                        ot = function() {
                            var e = Object(o.a)(l.a.mark((function e(t) {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            try {
                                                $e(t), Be.address && Ye.address
                                            } catch (n) {
                                                console.log("Error in Amount calculation", n), at(0)
                                            }
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(g.jsxs)(g.Fragment, {
                        children: [Object(g.jsx)(v, {
                            isExportModalVisible: Y,
                            handleEpertModeCancel: function() {
                                W(!0), z(!1)
                            },
                            collapsed: r
                        }), Object(g.jsx)(M, {
                            isModalVisible: V,
                            setIsExportModalVisible: z,
                            setIsModalVisible: W,
                            handleCancel: function() {
                                W(!1)
                            },
                            collapsed: r
                        }), Object(g.jsx)(b.a, {
                            title: Object(g.jsx)(g.Fragment, {
                                children: Object(g.jsx)("div", {
                                    className: "d-flex   ",
                                    children: Object(g.jsx)("p", {
                                        className: "exportModeTitle",
                                        children: " Selelct Tokens"
                                    })
                                })
                            }),
                            visible: ee,
                            onCancel: function() {
                                te(!1), z(!1)
                            },
                            className: r ? "modelResPop" : "modelPopup",
                            children: Object(g.jsx)("div", {
                                className: "row",
                                children: Object(g.jsx)("ul", {
                                    children: Object(g.jsx)("div", {
                                        className: "col-lg-12",
                                        children: fe && fe.map((function(e) {
                                            return Object(g.jsx)(g.Fragment, {
                                                children: Object(g.jsx)("li", {
                                                    className: "currencyLi",
                                                    onClick: it(e),
                                                    children: Object(g.jsxs)("div", {
                                                        className: "d-flex p-4",
                                                        children: [Object(g.jsx)("img", {
                                                            src: e.currencyImg,
                                                            width: "25",
                                                            height: "25",
                                                            alt: ""
                                                        }), Object(g.jsxs)("div", {
                                                            className: "d-flex flex-column ",
                                                            style: {
                                                                marginTop: "-0.5rem"
                                                            },
                                                            children: [Object(g.jsx)("h5", {
                                                                className: "ms-2 text-white",
                                                                children: e.currencyTitle
                                                            }), Object(g.jsx)("p", {
                                                                className: "ms-2   currencyDes",
                                                                children: e.currencyDes
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        }))
                                    })
                                })
                            })
                        }), Object(g.jsx)(b.a, {
                            title: Object(g.jsx)(g.Fragment, {
                                children: Object(g.jsx)("div", {
                                    className: "d-flex   ",
                                    children: Object(g.jsx)("p", {
                                        className: "exportModeTitle",
                                        children: " TO"
                                    })
                                })
                            }),
                            visible: ie,
                            onCancel: function() {
                                ue(!1)
                            },
                            className: r ? "modelResPop" : "modelPopup",
                            children: Object(g.jsx)("div", {
                                className: "row",
                                children: Object(g.jsx)("ul", {
                                    children: Object(g.jsx)("div", {
                                        className: "col-lg-12",
                                        children: ge && ge.map((function(e) {
                                            return Object(g.jsx)(g.Fragment, {
                                                children: Object(g.jsx)("li", {
                                                    className: "currencyLi",
                                                    onClick: st(e),
                                                    children: Object(g.jsxs)("div", {
                                                        className: "d-flex p-4",
                                                        children: [Object(g.jsx)("img", {
                                                            src: e.currencyImg,
                                                            width: "25",
                                                            height: "25",
                                                            alt: ""
                                                        }), Object(g.jsxs)("div", {
                                                            className: "d-flex flex-column ",
                                                            style: {
                                                                marginTop: "-0.5rem"
                                                            },
                                                            children: [Object(g.jsx)("h5", {
                                                                className: "ms-2 text-white",
                                                                children: e.currencyTitle
                                                            }), Object(g.jsx)("p", {
                                                                className: "ms-2   currencyDes",
                                                                children: e.currencyDes
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        }))
                                    })
                                })
                            })
                        }), Object(g.jsx)(le, {
                            walletModalVisible: ye,
                            cancelConnectwallet: function() {
                                me(!1)
                            },
                            collapsed: r
                        }), L ? Object(g.jsx)(C.a, {
                            style: {
                                marginTop: "30rem",
                                marginLeft: "50rem",
                                background: "black !important"
                            }
                        }) : Object(g.jsx)("div", {
                            className: "row mt-5",
                            children: Object(g.jsx)("div", {
                                className: r ? "col-lg-6  offset-md-0 offset-sm-0 offset-lg-4 my-5  swapTokenX " : "col-lg-6  offset-md-0 offset-sm-0 offset-lg-4 my-5 swapToken  ",
                                children: Object(g.jsx)(j.a, {
                                    title: Object(g.jsxs)(g.Fragment, {
                                        children: [Object(g.jsx)("h5", {
                                            className: "titleHeading",
                                            children: "Exchange "
                                        }), Object(g.jsx)("p", {
                                            className: "paratitle",
                                            children: "Trade tokens in an instant"
                                        })]
                                    }),
                                    children: Object(g.jsxs)("div", {
                                        className: "row",
                                        children: [Object(g.jsxs)("div", {
                                            className: "col-lg-12  ",
                                            children: [" ", Object(g.jsxs)("div", {
                                                className: "row From",
                                                children: [Object(g.jsxs)("div", {
                                                    className: "col-lg-8 col-sm-8 col-8 ",
                                                    children: [Object(g.jsx)("p", {
                                                        children: "Form"
                                                    }), Object(g.jsx)(T.a, {
                                                        value: Te ? nt : Ze,
                                                        onChange: function(e) {
                                                            return ot(e.target.value)
                                                        },
                                                        placeholder: "0.0",
                                                        type: "number"
                                                    })]
                                                }), Object(g.jsx)("div", {
                                                    className: "col-lg-4 col-sm-4   col-4 ",
                                                    children: Object(g.jsxs)("div", {
                                                        className: "d-flex fromCurrency  ",
                                                        onClick: function() {
                                                            te(!0)
                                                        },
                                                        children: [Object(g.jsx)("img", {
                                                            src: Te ? Ee.currencyImg : Ae.currencyImg,
                                                            width: "30",
                                                            alt: ""
                                                        }), Object(g.jsx)("h5", {
                                                            className: "text-white ms-2",
                                                            children: Te ? Ee.currencyTitle : Ae.currencyTitle
                                                        }), Object(g.jsx)(h.a, {
                                                            className: " ms-2 downCurrencyIcon"
                                                        })]
                                                    })
                                                })]
                                            })]
                                        }), Object(g.jsx)("div", {
                                            className: "col-lg-12",
                                            children: Object(g.jsx)("div", {
                                                className: "swapButton  text-center",
                                                children: Object(g.jsx)(x.a, {
                                                    className: "arrowDown",
                                                    onClick: function() {
                                                        he(!Te)
                                                    }
                                                })
                                            })
                                        }), Object(g.jsx)("div", {
                                            className: "col-lg-12  ",
                                            children: Object(g.jsxs)("div", {
                                                className: "row From",
                                                children: [Object(g.jsxs)("div", {
                                                    className: "col-lg-8  col-sm-8 col-8",
                                                    children: [Object(g.jsx)("p", {
                                                        children: "To"
                                                    }), Object(g.jsx)(T.a, {
                                                        value: Te ? Ze : nt,
                                                        onChange: function(e) {
                                                            return at(e.target.value)
                                                        },
                                                        placeholder: "0.0",
                                                        type: "number"
                                                    })]
                                                }), Object(g.jsx)("div", {
                                                    className: "col-lg-4 col-sm-4 col-4  ",
                                                    children: Object(g.jsxs)("div", {
                                                        className: "d-flex fromCurrency  ",
                                                        onClick: function() {
                                                            ue(!0)
                                                        },
                                                        children: [Object(g.jsx)("img", {
                                                            src: Te ? Ae.currencyImg : Ee.currencyImg,
                                                            width: "30",
                                                            alt: ""
                                                        }), Object(g.jsx)("h5", {
                                                            className: "text-white ms-2",
                                                            children: Te ? Ae.currencyTitle : Ee.currencyTitle
                                                        }), Object(g.jsx)(h.a, {
                                                            className: " downCurrencyIcon ms-2"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), Object(g.jsx)("div", {
                                            children: i ? Object(g.jsx)(g.Fragment, {
                                                children: Pe || Be.address == E ? Object(g.jsx)("button", {
                                                    onClick: ct,
                                                    className: "btn btn-block approvedBtn",
                                                    children: "Swap"
                                                }) : Object(g.jsx)("button", {
                                                    onClick: rt,
                                                    className: "btn btn-block approvedBtn",
                                                    children: "Approve"
                                                })
                                            }) : Object(g.jsx)("button", {
                                                onClick: lt,
                                                className: "btn btn-block approvedBtn",
                                                children: "Connect Wallet"
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                },
                pe = n(825),
                de = n(826),
                ye = n.p + "static/media/logo1.8e0ced48.png",
                me = function() {
                    var e = se(),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        s = n.web3,
                        r = n.collapsed,
                        c = (n.pairsList, n.tokensList, t[1]);
                    console.log("headercollapsed", r);
                    var p = Object(a.useCallback)(Object(o.a)(l.a.mark((function e() {
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    _(c);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), []);
                    return Object(g.jsx)(g.Fragment, {
                        children: Object(g.jsx)("div", {
                            children: Object(g.jsx)("nav", {
                                className: "navbar navbar-expand-lg navbar-light navbarHeader ",
                                children: Object(g.jsxs)("div", {
                                    className: "container-fluid ",
                                    children: [i.a.createElement(r ? pe.a : de.a, {
                                        className: "trigger",
                                        onClick: function() {
                                            c(B(!r))
                                        }
                                    }), Object(g.jsx)(y.b, {
                                        to: "/",
                                        className: " ",
                                        children: Object(g.jsx)("img", {
                                            src: ye,
                                            width: "100",
                                            alt: ""
                                        })
                                    }), Object(g.jsx)("div", {
                                        className: "collapse navbar-collapse",
                                        id: "navbarSupportedContent",
                                        children: Object(g.jsx)("ul", {
                                            className: "navbar-nav  navbarUl ms-auto mb-2 mb-lg-0 me-lg-5  ",
                                            children: Object(g.jsx)("li", {
                                                className: "nav-item",
                                                children: s ? Object(g.jsx)("span", {
                                                    className: "nav-link  claimBtn ",
                                                    children: "CONNECTED"
                                                }) : Object(g.jsx)("button", {
                                                    onClick: p,
                                                    className: "nav-link  claimBtn ",
                                                    children: "CONNECT WALLET"
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                be = n(827),
                je = n(202),
                Te = n(828);

            function he() {
                var e = window;
                return {
                    width: e.innerWidth,
                    height: e.innerHeight
                }
            }
            var xe = n(37),
                Oe = (n(363), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAABc1JHQgHZySx/AAADBUlEQVR42sWWy27TQBSGI8ZIcc6kuVWINyBVaYqgingcFrBAsKFL2PEA7EEs2KNSAYk9Y7upiipeoYESCmpRKcGZcaIiMRENym1ip7FNmiaMNBvbmu/8/7mMI5EJltDQgnipLEb+xxLvUZaZUGEm/trcQFdnC99GVziFMqfQam+Hwm5tS1maDXzdC+/vmgGfqiVlZbrwNyjLCewMw+XW1WfTg+soy6k/3KFYc0js0lTgzS68HAAvNihO9r/nJH77qHhO6QhTzinWGhTPSbgef9B7VzkqTFiYbTgLhIPW0HBCwrUO/ES+J7B7uIXOFsRvHV3nFD762m5graG7bKdS+fDeO3yH8mMH4BhwN8j2eik+UG4OKXdvI9aqaclbYwdwXIILdQsenTqQgNYg2A1f9YXT2J+alrg/Tp9fc0x4YhupeP9Z3YSHHrg2sJ0ZvrZ34HYxcU8KIuo8J/i5sJQbo+Fr7lbDa7aWxjIIAx5zgj0Fx8hcEPzErfyYqGmHgskotBiFihi+O4TZnXDMdQjrBhGTQehwUcL1uWDlVlLCfxE11YZzz9mwKzZ7LdrUlUVuweeRhxFcOCwoCXewwcrBA3doV/mob5mJ90VRyUXqRWW5ZsDB6FYDq1pKu3IebLttJWXOf1I1w3zgPRf2xHrvX+LbtrLcnlweeLvgqKvarU61+9tuuuCWmmYUrJFgo92aUBbrKOupg+8U5TiVqSi6q53reDXEdgm3rWg6SDmn8OEUvL9+FFDeIbGndR2nRsz2UOW2Fc0wIxYGX/jnudBTfhJQ7QPbN6IZX9s71uOyeKuMA4/fCW61hBueCrG9LMgYyturSpWbnMKXMLhtRedDbC8LXVk4041YpWioO4aUm2qGGaNt7w2zs8NlYVIl13Ui1nLDGVVTfjnv7Z2J4TIIouRta3Cl2lTN8JCcN88LfiotBlwOLDgCZTEtePfPB14EFxyaHrzjwCbKuyamF17wmXDnvQ5KnbFd8cBfzQgug9hAOWbAPregIl7PGC67o6gsNY3JCu4v08ly+j1B83kAAAAASUVORK5CYII="),
                fe = n(248),
                ge = n.n(fe),
                ve = function() {
                    var e = se(),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        i = n.web3,
                        s = n.accounts,
                        r = n.contract,
                        c = (n.jindoAdminContract, n.pairsList, n.tokensList, t[1]),
                        p = Object(a.useState)(!0),
                        d = Object(u.a)(p, 2),
                        y = d[0],
                        m = d[1],
                        b = Object(a.useState)("EGC Contract: 0xc001bbe2b87079294c63ece98bdd0a88d761434e"),
                        j = Object(u.a)(b, 2);
                    j[0], j[1];
                    Object(a.useEffect)((function() {
                        setTimeout((function() {
                            m(!1)
                        }), 1e3)
                    }), []);
                    var T = Object(a.useState)(),
                        h = Object(u.a)(T, 2),
                        x = h[0],
                        O = h[1],
                        f = Object(a.useState)(),
                        v = Object(u.a)(f, 2),
                        w = (v[0], v[1]),
                        A = Object(a.useState)(),
                        M = Object(u.a)(A, 2),
                        N = M[0],
                        E = M[1],
                        k = Object(a.useState)(),
                        S = Object(u.a)(k, 2),
                        D = S[0],
                        B = S[1],
                        I = Object(a.useState)(),
                        F = Object(u.a)(I, 2),
                        L = F[0],
                        R = F[1],
                        H = Object(a.useState)(),
                        P = Object(u.a)(H, 2),
                        U = P[0],
                        V = P[1];
                    Object(a.useEffect)(Object(o.a)(l.a.mark((function e() {
                        var t, n, a, c, o, u, p;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(i && r && s[0])) {
                                        e.next = 29;
                                        break
                                    }
                                    return e.next = 3, G(r, s);
                                case 3:
                                    return t = e.sent, V(t), console.log("unpaidCall", t), e.next = 8, Q(r, s);
                                case 8:
                                    return n = e.sent, console.log("sharesCall", (n.totalRealised / Math.pow(10, 18)).toFixed(7)), E((n.totalRealised / Math.pow(10, 18)).toFixed(7)), w(n), e.next = 14, Y(r, s);
                                case 14:
                                    return a = e.sent, console.log("totalDistrubtedCall", a), O((a / Math.pow(10, 18)).toFixed(7)), c = new i.eth.Contract(re, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"), o = new i.eth.Contract(re, "0x4F1A6FC6A7B65Dc7ebC4EB692Dc3641bE997c2F2"), e.next = 21, o.methods.balanceOf(s[0]).call();
                                case 21:
                                    return u = e.sent, e.next = 24, c.methods.balanceOf(s[0]).call();
                                case 24:
                                    p = e.sent, R((u / Math.pow(10, 9)).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), B((p / 1e18).toFixed(2)), console.log("santaBalanceOf", u), console.log("busdBalanceOf", p);
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [i, r, s]);
                    var W = function() {
                        var e = Object(o.a)(l.a.mark((function e() {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, K(i, r, s);
                                    case 3:
                                        e.sent, e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.log("handleclaim error", e.t0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 6]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    console.log("totalRealizedValue", N);
                    var q = Object(a.useCallback)(Object(o.a)(l.a.mark((function e() {
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    _(c);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), []);
                    return Object(g.jsx)(g.Fragment, {
                        children: y ? Object(g.jsx)(C.a, {
                            style: {
                                marginTop: "30rem",
                                marginLeft: "50rem"
                            }
                        }) : Object(g.jsx)("div", {
                            className: "row mx-4 my-4",
                            children: Object(g.jsxs)("div", {
                                className: "col-lg-12 ",
                                children: [Object(g.jsx)("div", {
                                    className: "row",
                                    children: Object(g.jsx)("div", {
                                        className: "col-lg-12 col-12",
                                        children: Object(g.jsx)("div", {
                                            className: "headingMain",
                                            children: Object(g.jsx)("p", {
                                                className: "headingParagraph text-center py-2",
                                                children: "(Please make sure you are visiting ProMars.io )"
                                            })
                                        })
                                    })
                                }), Object(g.jsx)("section", {
                                    className: "counterSection ",
                                    children: Object(g.jsxs)("div", {
                                        className: "row ",
                                        children: [Object(g.jsx)("div", {
                                            className: "col-lg-6  col-sm-12 text-center",
                                            children: Object(g.jsxs)("div", {
                                                children: [Object(g.jsx)("h3", {
                                                    children: "Your Wallet"
                                                }), Object(g.jsxs)("div", {
                                                    className: "wallet ms-3",
                                                    children: [Object(g.jsxs)("h1", {
                                                        className: "me-2",
                                                        children: [" ", L || "0"]
                                                    }), Object(g.jsx)("img", {
                                                        src: ye,
                                                        alt: "",
                                                        width: "55",
                                                        height: "30"
                                                    })]
                                                }), Object(g.jsxs)("div", {
                                                    className: "wallet",
                                                    children: [Object(g.jsx)("h1", {
                                                        className: "me-2",
                                                        children: Object(g.jsx)(ge.a, {
                                                            end: D || 0,
                                                            duration: 1
                                                        })
                                                    }), Object(g.jsx)("img", {
                                                        src: Oe,
                                                        alt: "",
                                                        width: "30",
                                                        height: "30"
                                                    })]
                                                }), Object(g.jsx)("h3", {
                                                    children: "Total Earned:"
                                                }), Object(g.jsxs)("div", {
                                                    className: "wallet",
                                                    children: [Object(g.jsxs)("h1", {
                                                        className: "me-2",
                                                        children: [" ", N || 0, " "]
                                                    }), Object(g.jsx)("img", {
                                                        src: Oe,
                                                        alt: "",
                                                        width: "30",
                                                        height: "30"
                                                    })]
                                                })]
                                            })
                                        }), Object(g.jsxs)("div", {
                                            className: "col-lg-6 text-center",
                                            children: [Object(g.jsx)("h3", {
                                                children: "Reward Not Claimed"
                                            }), Object(g.jsxs)("div", {
                                                className: "wallet",
                                                children: [Object(g.jsx)("h1", {
                                                    className: "me-2",
                                                    children: Object(g.jsx)(ge.a, {
                                                        end: U ? (U / 1e18).toFixed(2) : 0,
                                                        duration: 5
                                                    })
                                                }), Object(g.jsx)("img", {
                                                    src: Oe,
                                                    alt: "",
                                                    width: "30",
                                                    height: "30"
                                                })]
                                            }), i ? Object(g.jsx)("button", {
                                                onClick: W,
                                                className: "btn  claimBtn",
                                                children: "CLAIM MANUALLY"
                                            }) : Object(g.jsx)("button", {
                                                onClick: q,
                                                className: "btn  claimBtn",
                                                children: "Connect Wallet"
                                            }), Object(g.jsx)("p", {
                                                className: "earning-p",
                                                children: "Rewards are automatically sent every 60 minutes. It can, however, take longer depending on your holdings and trading volume. Rewards will be triggered once they are big enough to cover the gas fees. If you are a smaller holder it may take from a couple hours to a few days for rewards to appear in your wallet. You can also manually claim unclaimed rewards, but you will need to pay the gas fees."
                                            })]
                                        })]
                                    })
                                }), Object(g.jsx)("section", {
                                    className: "rewardSection my-3 text-center ",
                                    children: Object(g.jsxs)("div", {
                                        className: "row",
                                        children: [Object(g.jsxs)("div", {
                                            className: "col-lg-6 mt-3",
                                            children: [Object(g.jsx)("h3", {
                                                className: "text-white ",
                                                children: "Reward Distributed To Holders"
                                            }), Object(g.jsxs)("div", {
                                                className: "wallet",
                                                children: [Object(g.jsxs)("h1", {
                                                    className: "me-2",
                                                    children: [x || "00", " "]
                                                }), Object(g.jsx)("img", {
                                                    src: Oe,
                                                    alt: "",
                                                    width: "30",
                                                    height: "30"
                                                })]
                                            })]
                                        }), Object(g.jsxs)("div", {
                                            className: "col-lg-6  mt-3",
                                            children: [Object(g.jsx)("div", {
                                                className: "wallet",
                                                children: Object(g.jsx)("p", {
                                                    onClick: function() {
                                                        var e = document.createElement("textarea");
                                                        e.innerText = "foo bar baz", document.body.appendChild(e), e.select(), document.execCommand("copy"), e.remove()
                                                    },
                                                    children: "Contract: 0x8Be776a7c5188Ea0D1e8C933e51A0DD593A7A824"
                                                })
                                            }), Object(g.jsx)("div", {
                                                className: "wallet",
                                                children: Object(g.jsx)("p", {
                                                    children: "BUSD Contract: 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                we = p.a.Sider,
                Ae = p.a.Content,
                Me = function() {
                    var e = function() {
                            var e = Object(a.useState)(he()),
                                t = Object(u.a)(e, 2),
                                n = t[0],
                                i = t[1];
                            return Object(a.useEffect)((function() {
                                function e() {
                                    i(he())
                                }
                                return window.addEventListener("resize", e),
                                    function() {
                                        return window.removeEventListener("resize", e)
                                    }
                            }), []), n
                        }(),
                        t = e.width,
                        n = se(),
                        i = Object(u.a)(n, 2),
                        s = i[0],
                        r = s.web3,
                        c = s.accounts,
                        m = s.contract,
                        b = (s.jindoAdminContract, s.collapsed),
                        j = (s.pairsList, s.tokensList, i[1]),
                        T = d.a.SubMenu,
                        h = Object(a.useState)(!1),
                        x = Object(u.a)(h, 2),
                        O = x[0],
                        f = x[1];
                    Object(a.useEffect)((function() {
                        if (t <= 400) console.log("less than 400"), f(!0), j(B(!1));
                        else if (t <= 600) f(!0), j(B(!1));
                        else if (t <= 1200) {
                            var e = document.querySelectorAll(".ant-layout-sider .ant-layout-sider-dark");
                            console.log(e), j(B(!0)), f(!1)
                        } else t <= 1450 ? (j(B(!0)), f(!1)) : (j(B(!1)), f(!1))
                    }), [t]), console.log("collapsed", b);
                    return Object(a.useEffect)(Object(o.a)(l.a.mark((function e() {
                        var t, n, a;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(r && m && c[0])) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 3, G(m, c);
                                case 3:
                                    return t = e.sent, console.log("unpaidCall", t), e.next = 7, Q(m, c);
                                case 7:
                                    return n = e.sent, console.log("sharesCall", n), e.next = 11, Y(m, c);
                                case 11:
                                    a = e.sent, console.log("totalDistrubtedCall", a);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [r, m, c]), console.log(O), Object(g.jsx)(y.a, {
                        children: Object(g.jsxs)(p.a, {
                            children: [Object(g.jsx)(we, {
                                className: O && "antRes",
                                trigger: null,
                                collapsible: !0,
                                collapsed: b,
                                children: Object(g.jsxs)(d.a, {
                                    theme: "",
                                    mode: "inline",
                                    defaultSelectedKeys: ["1"],
                                    children: [Object(g.jsxs)(d.a.Item, {
                                        icon: Object(g.jsx)(be.a, {}),
                                        children: [Object(g.jsx)("span", {
                                            children: "Earning "
                                        }), Object(g.jsx)(y.b, {
                                            to: "/",
                                            children: " "
                                        })]
                                    }, "1"), Object(g.jsx)(d.a.Item, {
                                        icon: Object(g.jsx)(je.a, {}),
                                        children: Object(g.jsxs)("a", {
                                            style: {
                                                textDecoration: "none",
                                                color: "white"
                                            },
                                            href: "https://promars.io/",
                                            target: "_blank",
                                            children: ["Website", " "]
                                        })
                                    }, "7"), Object(g.jsxs)(T, {
                                        icon: Object(g.jsx)(Te.a, {}),
                                        title: "Communities",
                                        children: [Object(g.jsx)(d.a.Item, {
                                            children: Object(g.jsxs)("a", {
                                                style: {
                                                    textDecoration: "none",
                                                    color: "white"
                                                },
                                                href: "https://t.me/promarsgroup",
                                                target: "_blank",
                                                children: ["Telegram", " "]
                                            })
                                        }, "6"), Object(g.jsxs)(d.a.Item, {
                                            children: [" ", Object(g.jsxs)("a", {
                                                style: {
                                                    textDecoration: "none",
                                                    color: "white"
                                                },
                                                href: "https://twitter.com/promarscoin",
                                                target: "_blank",
                                                children: ["Twitter", " "]
                                            })]
                                        }, "8"), Object(g.jsxs)(d.a.Item, {
                                            children: [" ", Object(g.jsxs)("a", {
                                                style: {
                                                    textDecoration: "none",
                                                    color: "white"
                                                },
                                                href: "https://medium.com/@promars/promars-a-hyper-deflationary-coin-that-earns-holders-rewards-in-busd-577876dcb704",
                                                target: "_blank",
                                                children: ["Medium", " "]
                                            })]
                                        }, "9")]
                                    }, "sub2")]
                                })
                            }), Object(g.jsxs)(p.a, {
                                className: "site-layout",
                                children: [Object(g.jsx)(me, {
                                    collapsed: b,
                                    className: " ",
                                    style: {
                                        padding: 0
                                    }
                                }), Object(g.jsxs)(Ae, {
                                    className: "contentx",
                                    style: {
                                        minHeight: "100vh"
                                    },
                                    children: [Object(g.jsx)(xe.a, {
                                        path: "/",
                                        component: ve,
                                        exact: !0
                                    }), Object(g.jsx)(xe.a, {
                                        path: "/swap/token",
                                        component: ue
                                    })]
                                })]
                            })]
                        })
                    })
                },
                Ne = function() {
                    return Object(g.jsx)("div", {
                        children: Object(g.jsx)(Me, {})
                    })
                };
            var Ce = function() {
                return Object(g.jsx)("div", {
                    children: Object(g.jsx)(Ne, {})
                })
            };
            n(799), n(800), n(802), n(805);
            r.a.render(Object(g.jsx)(ie, {
                children: Object(g.jsx)(Ce, {})
            }), document.getElementById("root"))
        }
    },
    [
        [807, 1, 2]
    ]
]);
//# sourceMappingURL=main.b056fbcc.chunk.js.map