import React,{useEffect} from 'react'
import { useExpenseContext } from '../hooks/useExpenseContext'
import { useAuthContext } from '../hooks/useAuthContext'

const CurrentMonth = () => {
  const {expense, dispatch} = useExpenseContext()
  const {user} = useAuthContext()

  // useEffect(() => {
  //   const fetchExpense = async () => {
  //     const response = await fetch('/api/expense', {
  //       headers: {'Authorization': `Bearer ${user.token}`},
  //     })
  //     const json = await response.json()

  //     if (response.ok) {
  //       dispatch({type: 'SET_EXPENSES', payload: json})
  //     }
  //   }

  //   if (user) {
  //     fetchExpense()
  //   }
  // }, [dispatch, user])
  return (
    <div>
      Current Month Page
    </div>
  )
}

export default CurrentMonth
