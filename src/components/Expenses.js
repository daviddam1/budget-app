import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import Search from "./Search";
import { AppContext } from "../context/AppContext";


export default function Expenses(){
    const {expenses} = useContext(AppContext)

    const [filteredExpenses,setFilteredExpenses] = React.useState(expenses || [])

    React.useEffect(() =>{
        setFilteredExpenses(expenses)
    },[expenses])

    function handleChange(e){
    
        const searchResults = expenses.filter((filteredExpense) =>
            filteredExpense.name.toLowerCase().includes(e.target.value)
        )
        setFilteredExpenses(searchResults)
    } 

    return(
        <> 
        <Search         
            handleChange={handleChange}          
        />
        <ul className="ul-change">
            {filteredExpenses.map((expense) =>(
                <ExpenseItem
                    id = {expense.id}
                    name = {expense.name}
                    cost = {expense.cost}
                />)
                
            )}
        </ul></>
       
    )
}