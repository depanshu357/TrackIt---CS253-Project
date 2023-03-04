import { createContext, useReducer } from 'react'

export const DuesContext = createContext()

export const DuesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DUESS': 
      return {
        Dues: action.payload
      }
    case 'CREATE_DUES':
      return {
        Dues: [action.payload, ...state.Dues]
      }
    case 'DELETE_DUES':
      return {
        Dues: state.Dues.filter((e) => e._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const DuesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DuesReducer, {
    Dues: null
  })

  return (
    <DuesContext.Provider value={{...state, dispatch}}>
      { children }
    </DuesContext.Provider>
  )
}