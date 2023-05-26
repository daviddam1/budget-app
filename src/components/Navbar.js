import React ,{useContext} from "react";
import { AppContext } from "../context/AppContext";

import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

export default function Navbar(){

    const {budget} = useContext(AppContext)

    const{expenses} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total,item) =>{
        return total = total + item.cost
    },0)

    const alertType = totalExpenses >budget ? 'alert-danger':'alert-success'

    const {dispatch} = useContext(AppContext)

    const [isEditing,setIsEditing] = React.useState(false)

    function handleEditClick(){
        setIsEditing(true)
        console.log(isEditing)    
    }

    function handleSaveClick(value){
        dispatch({
            type: 'EDIT',
            payload:value,
        })
        setIsEditing(false)
        console.log(isEditing)
    }

    return(
    <div className="navbar">
        <div className="budget">           
            {isEditing?
            ( <><span>
                Budget: ${budget}
            </span><EditBudget handleSaveClick={handleSaveClick} budget={budget}/></>):
            (<ViewBudget handleEditClick={handleEditClick} budget ={budget}/>)}
        </div>
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: ${budget-totalExpenses}
            </span>
        </div>
        <div className="spent">
            <span>
                Spent so far: ${totalExpenses}
            </span>
        </div>
    </div>
)
}