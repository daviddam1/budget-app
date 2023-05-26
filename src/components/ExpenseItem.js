import { faX } from "@fortawesome/free-solid-svg-icons";
import React , {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../context/AppContext";

export default function ExpenseItem(props){
    const {dispatch} = useContext(AppContext)

    function handleDelete(){
        dispatch({
            type:'DELETE_EXPENSE',
            payload: props.id,
        })
    }

    return(
        <li className="list-group">
            {props.name}
            <div className="item">
                <div className="cost">${props.cost}</div>
                <FontAwesomeIcon onClick={handleDelete} icon={faX}/>
            </div>
        </li>
    )
}