import { createContext, useReducer } from "react"

const AddReducer = (state, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };
            case 'DELET_EXPENSE':
                return {
                    ...state,
                    expenses: state.expenses.filter(
                        (expense) => expense.id !== action.payload),
                }
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        {id: 1, name: "Shopping", cost: 50},
    ],
};

export const AppContext = createContext();

export const AddProvider = (props) => {
    const [state, dispatch ] = useReducer(AddReducer, initialState ); 
    return(
        <AppContext.Provider
        value={{
            Budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

