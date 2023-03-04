import { useAuthContext } from './useAuthContext'
import { useDuesContext } from './useDuesContext'
import { useExpenseContext } from './useExpenseContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchExpense } = useExpenseContext()
  const {dispatch: dispatchd} = useDuesContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchExpense({ type: 'SET_EXPENSES', payload: null })
    dispatchd({type:'SET_DUES',payload:null})
  }

  return { logout }
}