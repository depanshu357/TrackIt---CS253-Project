import React, { createContext, useReducer } from 'react'

export const ExpenseContext = createContext()

export const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXPENSES': 
      return {
        expense: action.payload
      }
    case 'CREATE_EXPENSE':
      return {
        expense: [action.payload, ...state.expense]
      }
    case 'DELETE_EXPENSE':
      return {
        expense: state.expense.filter((e) => e._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, {
    expense: null
  })

  return (
    <ExpenseContext.Provider value={{...state, dispatch}}>
      { children }
    </ExpenseContext.Provider>
  )
}