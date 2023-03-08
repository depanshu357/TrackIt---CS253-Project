import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import { useDuesContext } from "../hooks/useDuesContext"

const ExpenseForm = () => {
  const { dispatch } = useDuesContext()
  const { user } = useAuthContext()

  const [Item, setItem] = useState('')
  const [Amount, setAmount] = useState('')
  const [Description, setDescription] = useState('')
  const [Date, setDate] = useState('')
  const [RollNo,setRollNo] = useState('')
  const [shopName,setShopName] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
    setShopName(user.shopName);
    console.log(user.shopName)
    const due = {Item, Amount, Description,Date,RollNo,shopName}

    const response = await fetch('/api/dues', {
      method: 'POST',
      body: JSON.stringify(due),
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
      setAmount('')
      setDescription('')
      setRollNo('')
      setError(null)
      setEmptyFields([])

      dispatch({type: 'CREATE_DUES', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Borrowing</h3>

      <label>Item:</label>
      <input 
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={Item}
        className={emptyFields.includes('Item') ? 'error' : ''}
      />

        <label >RollNo:</label>
        <input 
        type="number"
        onChange = {(e)=> setRollNo(e.target.value)}
        value={RollNo}
        />

      <label>Amount:</label>
      <input 
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={Amount}
        className={emptyFields.includes('Amount') ? 'error' : ''}
      />

      <label>Description:</label>
      <input 
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={Description}
        className={emptyFields.includes('Description') ? 'error' : ''}
      />

      <label>Date:</label>
      <input 
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={Date}
        className={emptyFields.includes('Date') ? 'error' : ''}
      />


      <button>Add To List</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ExpenseForm