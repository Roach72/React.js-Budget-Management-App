import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseListe from "./components/ExpenseListe";
import AddExoenseForm from "./components/AddExoenseForm";
import { AddProvider } from "./contaxt/AddContext";


const App = () => {
  return (
    <AddProvider>
      <div className="container w-50 p-3">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-md">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseListe />
          </div>
        </div>
        <h3 className="mt-3">Add Exoense</h3>
        <div className="row mt-3 ">
          <div className="col-sm">
            <AddExoenseForm />
          </div>
        </div>
      </div>
    </AddProvider>
  )
}

export default App


