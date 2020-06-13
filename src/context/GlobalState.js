import React, {createContext, useReducer } from 'react';

import AppReducer from './AppReducer';



// const initialState = {
//     transactions: []
//   }

const initialState = {
    AllTransactions: [
  { id: 1, description: 'Flower', amount: -20 },
  { id: 2, description: 'Salary', amount: 300 },
  { id: 3, description: 'Book', amount: -10 },
  { id: 4, description: 'Camera', amount: 150 }
]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);


    function deleteTransaction(id){ 
        dispatch({
            type: 'DELETE',
            payload: id
        });
    }


    function addTransaction(transaction){ 
        dispatch({
            type: 'ADD',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value = {{
        AllTransactions: state.AllTransactions, 
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>);
}