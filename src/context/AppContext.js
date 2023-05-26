import React from "react"
import { createContext } from "react"

function AppReducer(state, action){
    switch(action.type){
        case 'ADD_EXPENSE':
        return {
            ...state,
            expenses:[...state.expenses,action.payload]
        }
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter((expense) => expense.id!==action.payload)
            }
        case 'EDIT':
            return{
                ...state,
                budget: action.payload
            }
        default:
            return state

    }
}

const initalState={
    budget:2000,
    expenses: [

    ]
}

export const AppContext = createContext()

export default function AppProvider(props){
    const [state,dispatch] = React.useReducer(AppReducer, initalState)
    return(<AppContext.Provider value = {{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}