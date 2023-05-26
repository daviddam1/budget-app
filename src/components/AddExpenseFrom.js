import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

import { nanoid } from "nanoid";

export default function AddExpenseForm(){

    const {dispatch} = useContext(AppContext)

    const [name, setName] = React.useState('')
    const [cost,setCost] = React.useState('')
    
    function onSubmit(e){
        e.preventDefault()

        const expense ={
            id: nanoid(),
            name:name,
            cost: parseInt(cost),
        }

        dispatch({
            type:'ADD_EXPENSE',
            payload: expense,
        })

        setName('')
        setCost('')
    }

    return(
        <div className="expense-form">
            <h2>Add Expense</h2>
            <form onSubmit={onSubmit} className="form">
                <label className="name">Name</label>
                <input
                    required='required'
                    type="text"
                    id="name"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <label className="cost">Cost</label>
                <input
                    required='required'
                    type="text"
                    id="cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}           
                ></input>
                <button className="add">Add</button>
            </form>
        </div>
    )
}