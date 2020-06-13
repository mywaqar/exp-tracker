export default (state, action) => {
    switch(action.type) {
      case 'DELETE':
        return {
          ...state,
          AllTransactions: state.AllTransactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD':
        return {
          ...state,
          AllTransactions: [action.payload, ...state.AllTransactions]
        }
      default:
        return state;
    }
  }