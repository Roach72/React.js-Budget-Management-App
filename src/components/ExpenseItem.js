import React, { useContext } from 'react'
import { TiDelete } from "react-icons/ti";
import { AppContext } from '../contaxt/AddContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELET_EXPENSE',
            payload: props.id,
        });
    };


    return (
        <li className='border p-3 mt-3 border-secondary-subtle list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge  bg-primary text-white'>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem
