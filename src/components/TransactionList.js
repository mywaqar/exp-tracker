import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from '../components/Transaction';


export const TransactionList = () => {

  const { AllTransactions } = useContext(GlobalContext);

    return (
        <>
        <h3>History</h3>
        <ul className="list">
          {AllTransactions.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction} />))}
        </ul>
        </>
    )  
} 


// <li className="minus">
//           Cash <span>-$400</span><button className="delete-btn">x</button>
//         </li>
//          </ul>
//          </>