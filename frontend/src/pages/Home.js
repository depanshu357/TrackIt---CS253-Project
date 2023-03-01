import { useEffect }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import {useExpenseContext} from "../hooks/useExpenseContext"

// components
// import ExpenseDetails from '../components/ExpenseDetails'
// import ExpenseForm from "../components/ExpenseForm"
import ExpenseDetails from '../Components/ExpenseDetails'
import ExpenseForm from '../Components/ExpenseForm'

const Home = () => {
  const {expense, dispatch} = useExpenseContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchExpense = async () => {
      const response = await fetch('/api/expense', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_EXPENSES', payload: json})
      }
    }

    if (user) {
      fetchExpense()
    }
  }, [dispatch, user])

  return (
    <div className="home" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}>
      
      <div className="expenses">
        {expense && expense.map((expensee) => (
          <ExpenseDetails key={expensee._id} expensee={expensee} />
        ))}
      </div>
      <ExpenseForm />
    </div>
  )
}

export default Home