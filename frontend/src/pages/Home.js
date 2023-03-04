import { useEffect, useState }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import {useExpenseContext} from "../hooks/useExpenseContext"
import { useDuesContext } from '../hooks/useDuesContext'

// components
// import ExpenseDetails from '../components/ExpenseDetails'
// import ExpenseForm from "../components/ExpenseForm"
import ExpenseDetails from '../Components/ExpenseDetails'
import ExpenseForm from '../Components/ExpenseForm'
import DuesForm from '../Components/DuesForm'

const Home = () => {
  const {expense, dispatch} = useExpenseContext()
  const {Dues,dispatch: dispatchd} = useDuesContext() 
  const {user} = useAuthContext()
  const [borrows,setBorrows] = useState(null);
  
  
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
      console.log(user.rollNo);
    }
  }, [dispatch, user])

  useEffect( () =>{
    const fetchDues = async () => {
      const response = await fetch('/api/dues',{
        method:"GET",
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if(response.ok){
        console.log(" dues coming up ")
        console.log(json[0])
        setBorrows(json);
        console.log(borrows);
        console.log(borrows[0].RollNo);
        dispatchd({type:'SET_DUES',payload:json})

      }
    }
    if(user){
      fetchDues()
    }
  },[dispatchd,user])

  if(user.userType !== "Shopkeeper"){

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
      <div style={{display:"flex",flexDirection:"column"}}>

      {borrows && borrows.map((borrow) => {
        if(borrow.RollNo === user.rollNo)
        console.log("hua")
        return (
          
          <div>
          <div>
          Item - {borrow.Item} <br></br>
          Amount - {borrow.Amount} <br></br>
          RollNo - {borrow.RollNo} <br></br>
          Description - {borrow.Description}
          </div>
          </div>
          )
        })}
        </div>
    </div>
  )
  }else{
    return(
      <div className="home" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}>
      {Dues && Dues.map((borrow) =>{

        if(borrow.shopName === user.shopName) return
        (
          <div>
          <div>
          Item - {borrow.Item} <br></br>
          Amount - {borrow.Amount} <br></br>
          RollNo - {borrow.RollNo} <br></br>
          Description - {borrow.Description}
          </div>
          </div>
      )
        }
      )}
      <DuesForm />
    </div>
    )
  }
}

export default Home