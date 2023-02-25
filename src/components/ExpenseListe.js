import React,{useContext} from 'react'
import ExpenseItem from './ExpenseItem'

import { AppContext } from '../contaxt/AddContext'

const ExpenseListe = () => {
    const {expenses} = useContext(AppContext)

    return (
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <ExpenseItem 
                id={expense.id} 
                name={expense.name} 
                cost={expense.cost} />
                ))}
        </ul>
    )
}

export default ExpenseListe

