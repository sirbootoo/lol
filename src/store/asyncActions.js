import {
    setupWeb3,
    setupContract,
    setNetwork,
    addEthereumAccounts,
    setupFactoryContract,
    web3LoadingError,
    routerContract,
    navigationAction
} from "./actions";
import Web3 from "web3";
import {
    DISTRIBUAR_CONTRACT_ABI,
    DISTRIBUAR_CONTRACT_ADDRESS
} from '../contract/DistributerContract';
// import WalletConnectProvider from "@walletconnect/web3-provider";
import {
    ROUTER_ABI,
    ROUTER_ADDRESS
} from '../contract/routeContract';
import {
    FACTORY_ABI,
    FACTORY_ADDRESS
} from '../contract/factory';

import {
    WBNB_ADDRESS
} from '../contract/staticData'
import {
    ethers
} from 'ethers'


export const loadBlockchain = async (dispatch) => {
    try {
        console.log("Web3 = ", Web3);
        console.log("Web3.givenProvider = ", Web3.givenProvider);
        dispatch(setNetwork(Web3.givenProvider.chainId));
        // if (Web3.givenProvider) {
        if (Web3.givenProvider && Web3.givenProvider.chainId == 0x38) {
            window.ethereum.on('accountsChanged', function(accounts) {
                dispatch(addEthereumAccounts(accounts));
            });
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            const loadRouterContract = new web3.eth.Contract(ROUTER_ABI, ROUTER_ADDRESS);
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(DISTRIBUAR_CONTRACT_ABI, DISTRIBUAR_CONTRACT_ADDRESS);
            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
            console.log("contract", contract);
            console.log("contract", contract.methods)
            const factoryContract = new web3.eth.Contract(FACTORY_ABI, FACTORY_ADDRESS);
            console.log("factoryContract", factoryContract.methods)
            dispatch(routerContract(loadRouterContract));
            dispatch(setupFactoryContract(factoryContract));
        } else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
        if (Web3.givenProvider && Web3.givenProvider.chainId != 0x38) {
            alert("please connect wallet with binance smartchain")
        }
    } catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001) {

            dispatch(web3LoadingError(error.message));
        }
    }
}

// export const loadWalletConnect = async (dispatch) => {
//     try {
//         const provider = new WalletConnectProvider({

//             rpc: {
//                 97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
//             },
//             rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
//             chainId: 97
//         });
//         if (provider) {
//             await provider.enable();

//             const web3 = new Web3(provider);
//             console.log(web3)
//             dispatch(setupWeb3(web3));
//             const contract = new web3.eth.Contract(DISTRIBUAR_CONTRACT_ABI, DISTRIBUAR_CONTRACT_ADDRESS);
//             console.log("this is for contract", contract)

//             dispatch(setupContract(contract));
//             const accounts = await web3.eth.getAccounts();
//             console.log("this is for accounts", accounts)
//             dispatch(addEthereumAccounts(accounts));
//             console.log("contract = ", contract);
//             console.log("contract.methods = ", contract.methods);
//         }
//         else {
//             dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
//         }
//     }
//     catch (error) {
//         console.log("Error in loading Web3 = ", error);
//         if (error.code === 4001) {

//             dispatch(web3LoadingError(error.message));
//         }
//     }
// }




export const getUpaidEarningsAsyn = async (contract, accounts) => {
    try {
        let receipt = await contract.methods.getUnpaidEarnings(accounts[0]).call();
        console.log("receipt", receipt)
        return receipt;
    } catch (error) {
        console.log("error", error)
    }
}


export const sharesAsync = async (contract, accounts) => {
    try {
        let receipt = await contract.methods.shares(accounts[0]).call();
        console.log("receipt", receipt)
        return receipt;
    } catch (error) {
        console.log("error", error)
    }
}

export const totalDistributedAsync = async (contract, accounts) => {
    console.log("in total distributed", contract);
    try {
        let receipt = await contract.methods.totalDistributed().call();
        console.log("total distributed", receipt)
        return receipt;
    } catch (error) {
        console.log("error in Distributed", error)
    }
}

export const swapExactTokenForTokens = async (web3, routerContract, payload, accounts) => {
    console.log("payload in swap ETH", payload);
    let amountIn = web3.utils.toBN(payload.amountIn);
    try {
        if (payload.token0 == WBNB_ADDRESS || payload.token1 == WBNB_ADDRESS) {
            const result = await SwapforEthToToken(web3, routerContract, payload, accounts);
            console.log("ifcondition", result);
        } else {
            let path = [payload.token0, payload.token1];
            const result = await routerContract.methods.swapExactTokensForTokens(amountIn, payload.amountOutMin, path, payload.to, payload.deadline.toString()).send({
                from: accounts[0]
            });
            console.log("elsecondition", result);
            return result;
        }
    } catch (error) {
        console.log("Error in Swap ETH", error);
    }
}

export const SwapforEthToToken = async (web3, routerContract, payload, accounts) => {
    try {
        let path = [payload.token0, payload.token1];

        if (payload.token0 == WBNB_ADDRESS) {
            let ethers = payload.amountIn.toString();
            let result = await routerContract.methods.swapExactETHForTokens(payload.amountOutMin, path, payload.to, payload.deadline).send({
                from: accounts[0],
                value: ethers
            });
        } else if (payload.token1 == WBNB_ADDRESS) {
            // let ethers=payload.amountIn;
            let result = await routerContract.methods.swapExactTokensForETH(payload.amountIn.toString(), payload.amountOutMin.toString(), path, payload.to, payload.deadline).send({
                from: accounts[0]
            });
        }

    } catch (error) {
        console.log("error in token to EH swap", error);
    }
}



export const approve = async (web3, tokenContract, spender, accounts, dispatch) => {
    console.log("before approve", tokenContract, spender, accounts);
    try {
        const receipt = await tokenContract.methods.approve(spender, ethers.constants.MaxUint256).send({
            from: accounts[0]
        });

        // dispatch(checkAllowance(receipt));
        console.log(receipt)


        return receipt;
    } catch (error) {
        console.log("error in approval", error);
        return false;
    }

}



export const getAmountOut = (amountIn, reserveIn, reserveOut) => {
    console.log("in getAmount", amountIn, reserveIn, reserveOut);
    if (amountIn > 0 && reserveIn > 0 && reserveOut > 0) {

        let amountInWithFee = amountIn * 9975;
        let numerator = amountInWithFee * reserveOut;
        let denominator = reserveIn * 10000 + amountInWithFee;
        let amountOut = numerator / denominator;
        console.log("AMOUNTOUT", amountIn, reserveIn, reserveOut);
        console.log("AMOUNTOUT", amountIn, reserveIn, reserveOut, amountOut);
        return amountOut;
    } else {
        return 0;
    }
}


export const handleClaimDivident = async (web3, contract, accounts) => {
    try {
        let receipt = await contract.methods.claimDividend().send({
            from: accounts[0]
        });
        return receipt
    } catch (error) {
        console.log("error", error)
    }
}