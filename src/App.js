import React from "react";

import './index.css'

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Expenses from "./components/Expenses";
import AddExpenseForm from "./components/AddExpenseFrom";
import AppProvider from "./context/AppContext";

export default function App(){
  return(
    <AppProvider>
      <div className="app">
      <Header/>
      <Navbar/>
      <Expenses/>
      <AddExpenseForm/>
    </div>
    </AppProvider>    
  )
}