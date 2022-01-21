// Actions
export const deleteTransaction = (id) => {
    return {
        type: 'DELETE_TRANSACTION',
        payload: id
    };
}

export const addTransaction = (transaction) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: transaction
    };
}

export const setupWeb3 = (web3) => {
    return {
        type: 'SETUP_WEB3',
        payload: web3
    };
}

export const setupFactoryContract = (factoryContract) => {
    return {
        type: 'SETUP_FACTORY_CONTRACT',
        payload: factoryContract
    };
}


export const setupContract = (contract) => {
    return {
        type: 'SETUP_CONTRACT',
        payload: contract
    };
}

export const collapceAction = (collapsed) => {
    return {
        type: 'HANDLE_COLLAPSE',
        payload: collapsed
    };
}

export const routerContract = (loadRouterContract) => {
    return {
        type: 'ROUTER_CONTRACT',
        payload: loadRouterContract
    };
}

export const addEthereumAccounts = (accounts) => {
    return {
        type: 'ADD_ETHEREUM_ACCOUNTS',
        payload: accounts
    };
}
export const makeApiTrigger = (apiTrigger) => {
    return {
        type: 'API_TRIGGER',
        payload: apiTrigger
    };
}
export const web3LoadingError = (errorMessage) => {
    return {
        type: 'WEB3_LOADING_ERROR',
        errorMessage: errorMessage
    };
}
export const setNetwork = (provider) => {
    return {
        type: 'SETUP_PROVIDER',
        payload: provider
    };
}