import React, {useState , useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {


    
    const [text,  setText]  =  useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext (GlobalContext);

    const onSubmit = e => {
            
        e.preventDefault();

    
const newTransaction = {
            id: Math.floor(Math.random()*10000000),
            text:text,
            amount: +amount
        }
        
        addTransaction(newTransaction);
        }
    

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit = {onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Description</label>
                <input type="text" value={text} required onChange = {(e)=> setText(e.target.value)} placeholder="Enter description..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                >Amount <br />
                (negative - expense)  (positive - income)</label
            >
            <input type="number" value = {amount} required onChange = {(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
            </form>
        </>
    )

}
