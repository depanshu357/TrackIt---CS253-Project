import { useState } from "react"
import { useExpenseContext } from "../hooks/useExpenseContext"
import { useAuthContext } from '../hooks/useAuthContext'

const ExpenseForm = () => {
  const { dispatch } = useExpenseContext()
  const { user } = useAuthContext()

  const [Item, setItem] = useState('')
  const [MoneySpent, setMoneySpent] = useState('')
  const [Description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const expense = {Item, MoneySpent, Description}

    const response = await fetch('/api/expense', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setItem('')
      setMoneySpent('')
      setDescription('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_EXPENSE', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Purchase</h3>

      <label>Expense Details:</label>
      <input 
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={Item}
        className={emptyFields.includes('Item') ? 'error' : ''}
      />

      <label>Money Spent:</label>
      <input 
        type="number"
        onChange={(e) => setMoneySpent(e.target.value)}
        value={MoneySpent}
        className={emptyFields.includes('MoneySpent') ? 'error' : ''}
      />

      <label>Descrition:</label>
      <input 
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={Description}
        className={emptyFields.includes('Description') ? 'error' : ''}
      />

      <button>Add To List</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ExpenseForm