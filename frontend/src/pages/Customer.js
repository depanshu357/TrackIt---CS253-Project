import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";
import { useDuesContext } from "../hooks/useDuesContext";


// components
import ExpenseDetails from "../Components/ExpenseDetails";
import ExpenseForm from "../Components/ExpenseForm";
import DuesDetailsForCustomer from "../Components/DuesDetailsForCustomer"

const Customer = () => {
    const { expense, dispatch } = useExpenseContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);
  const { Dues, dispatch: dispatchd } = useDuesContext();


  useEffect(() => {
    const fetchExpense = async () => {
      const response = await fetch("/api/expense", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EXPENSES", payload: json });
      }
    };

    if (user) {
      fetchExpense();
      console.log(user.rollNo);
    }
  }, [dispatch, user]);

  useEffect(() => {
    const fetchDues = async () => {
      const response = await fetch(`/api/dues`, {
        method: "GET",
        headers: { 'Authorization': `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        console.log(" dues coming up ");
        // console.log(json[0])
        // setBorrows(json);
        // console.log(borrows[0].RollNo);
        console.log(borrows);
        dispatchd({ type: "SET_DUESS", payload: json });
      }
    };
    if (user) {
      fetchDues();
    }
  }, [dispatchd, user]);

  return (
    <div>
      <div
        className="home"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
        >
        <div className="expenses">
          {expense &&
            expense.map((expensee) => (
              <ExpenseDetails key={expensee._id} expensee={expensee} />
              ))}
        </div>
        <ExpenseForm />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Dues &&
            Dues.map((borrow) => {
              // console.log(borrow.RollNo)
                if(user.rollNo == borrow.RollNo)
                return (
                  <div>
                  <DuesDetailsForCustomer key={borrow._id} due={borrow} />
                </div>
              );
            
          })}
        </div>
      </div>
    </div>
  )
}

export default Customer
