import React, { useContext, useState } from 'react';
import { AppContext } from '../contaxt/AddContext';
import {v4 as uuiv4} from 'uuid';

const AddExoenseForm = () => {
    const { dispatch } = useContext(AppContext)
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        const expense ={
            id: uuiv4(),
            name: name,
            cost: parseInt(cost),
        };
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name' className='fw-semibold'>Name</label>
                    <input 
                        required='required' 
                        type='text' 
                        className='form-control' 
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}>
                    </input>
                </div>
                <div className='col-sm'>
                    <label for='cost' className='fw-semibold'>Cost</label>
                    <input 
                    required='required'
                    type='text'
                    className='form-control'
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <button type='submit' className='fw-semibold btn btn-primary mt-1'>SAVE</button>
                </div>
            </div>
        </form>
    );
};

export default AddExoenseForm
