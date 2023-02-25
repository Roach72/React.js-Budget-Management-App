import React, {useContext} from 'react'
import { AppContext } from '../contaxt/AddContext'

const Remaining = () => {
    const {expenses, Budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);


    const alertType = totalExpenses > Budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${Budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining
