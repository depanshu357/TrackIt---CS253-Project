import { useAuthContext } from './useAuthContext'
import { useExpenseContext } from './useExpenseContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchExpense } = useExpenseContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchExpense({ type: 'SET_EXPENSES', payload: null })
  }

  return { logout }
}