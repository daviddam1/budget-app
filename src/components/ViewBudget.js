import React from "react";

export default function ViewBudget(props){
    return(
        <>
            <span>Budget: ${props.budget}</span>
            <button onClick={props.handleEditClick}>Edit</button>
        </>
    )
}