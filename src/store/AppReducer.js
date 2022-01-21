export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'SETUP_WEB3':
            return {
                ...state,
                web3: action.payload,
                web3LoadingErrorMessage: "",
                web3Loadded: true
            }
        case 'SETUP_CONTRACT':
            return {
                ...state,
                contract: action.payload
            }
        case 'SETUP_FACTORY_CONTRACT':
            return {
                ...state,
                factoryContract: action.payload
            }
        case 'ADD_ETHEREUM_ACCOUNTS':
            return {
                ...state,
                accounts: action.payload
            }
        case 'HANDLE_COLLAPSE':
            return {
                ...state,
                collapsed: action.payload
            }
        case 'API_TRIGGER':
            return {
                ...state,
                apiTrigger: action.payload
            }
        case 'ROUTER_CONTRACT':
            return {
                ...state,
                routerContract: action.payload
            }
        case 'SETUP_PROVIDER':
            return {
                ...state,
                network: action.payload
            }
        case 'WEB3_LOADING_ERROR':
            return {
                ...state,
                web3LoadingErrorMessage: action.errorMessage,
                web3Loadded: false
            }

        default:
            return state;
    }
}