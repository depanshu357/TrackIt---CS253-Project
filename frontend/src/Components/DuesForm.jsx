import React,{ useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'
import { useDuesContext } from "../hooks/useDuesContext"
import "./DueDetails.css"

const ExpenseForm = ({d,setD}) => {
  const { dispatch } = useDuesContext()
  const { user } = useAuthContext()

  const [Item, setItem] = useState('')
  const [Amount, setAmount] = useState('')
  const [Description, setDescription] = useState('')
  const [Date, setDate] = useState('')
  const [RollNo,setRollNo] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
    console.log(user.shopName)
    var shopName = user.shopName;
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

  const handleDelete = () =>{
    setD("none");
  }

  return (
    <form className="create-dues" onSubmit={handleSubmit}>
      <div className="cross-delete-button" onClick={handleDelete}></div>
      <h3 style={{color: "white"}}>Add a New Borrowing</h3>

      {/* <label>Item:</label> */}
      <input 
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={Item}
        className={emptyFields.includes('Item') ? 'error' : ''}
        placeholder="Item"
      />

        {/* <label >RollNo:</label> */}
        <input 
        type="number"
        onChange = {(e)=> setRollNo(e.target.value)}
        value={RollNo}
        placeholder="RollNo"
        />

      {/* <label>Amount:</label> */}
      <input 
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={Amount}
        className={emptyFields.includes('Amount') ? 'error' : ''}
        placeholder="Amount"
      />

      {/* <label>Description:</label> */}
      <input 
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={Description}
        className={emptyFields.includes('Description') ? 'error' : ''}
        placeholder="Description"
      />

      {/* <label>Date:</label> */}
      <input 
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={Date}
        className={emptyFields.includes('Date') ? 'error' : ''}
        placeholder="Date"
      />


      <button>Add To List</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ExpenseForm