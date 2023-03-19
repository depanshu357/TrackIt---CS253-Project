import React from 'react'
import ReactDOM from 'react-dom'
import{ useExpenseContext } from '../hooks/useExpenseContext'
import { useAuthContext } from '../hooks/useAuthContext'
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";

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

  const handleClickForUpdate = async () =>{
    if(!user){return}
    const response = await fetch('api/expense'+expensee._id,{
      method:'UPDATE',
      headers:{
        'Authorization' : `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    
  }
  const renderIcon = () =>{
    if(expensee.Category==="Food") return <span><FastfoodIcon /></span> 
    else if(expensee.Category === "Health") return <HealthAndSafetyIcon />
    else if(expensee.Category ==="Shopping") return <ShoppingCartIcon />
    return <PaymentsIcon />
  }
  return (
    <div className="expense-details">
      <span>{expensee.Item}</span>
      <span>{expensee.MoneySpent}</span>
      <span>{expensee.Category}</span>  
      
        {/* expensee.Category=="Food"?<span><PaymentsIcon /></span> */}
      
      {/* <p><strong>Description: </strong>{expensee.Description}</p> */}
      {/* <p>{formatDistanceToNow(new Date(expensee.createdAt), { addSuffix: true })}</p> */}
      {/* <p><strong>Date: </strong>{expensee.Date}</p> */}
      {/* <span className="material-symbols-outlined" onClick={handleClick} style={{cursor:"pointer"}}>delete</span> */}
      {/* <span onClick={handleClickForUpdate} style={{cursor:"pointer"}}>Update</span>  */}
    </div>
  )
}

export default ExpenseDetails