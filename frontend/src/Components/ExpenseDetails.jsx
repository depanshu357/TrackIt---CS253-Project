import { useExpenseContext } from '../hooks/useExpenseContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ExpenseDetails = ({ expensee }) => {
  const { dispatch } = useExpenseContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/expense/' + expensee._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_EXPENSE', payload: json})
    }
  }

  return (
    <div className="expense-details">
      <h4>{expensee.Item}</h4>
      <p><strong>Money Spent: </strong>{expensee.MoneySpent}</p>
      <p><strong>Description: </strong>{expensee.Description}</p>
      <p>{formatDistanceToNow(new Date(expensee.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default ExpenseDetails