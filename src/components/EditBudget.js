import React from "react";

export default function EditBudget(props){
    const [value,setValue] = React.useState(props.budget)
    
    return(
        <>
        <input
            className="input-edit"
            required='required'
            type="number"
            id='name'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
        </input>
        <button
            type="button"
            onClick={() => props.handleSaveClick(value)}
        >Save</button>
        </>
    )

}