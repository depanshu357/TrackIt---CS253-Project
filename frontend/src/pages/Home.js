import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";
import { useDuesContext } from "../hooks/useDuesContext";

// components
import ExpenseDetails from "../Components/ExpenseDetails";
import ExpenseForm from "../Components/ExpenseForm";
import DuesForm from "../Components/DuesForm";
import DuesDetailsForShopkeeper from "../Components/DuesDetailsForShopkeeper";
import DuesDetailsForCustomer from "../Components/DuesDetailsForCustomer"

const Home = () => {
  const { expense, dispatch } = useExpenseContext();
  const { Dues, dispatch: dispatchd } = useDuesContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);

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
      const response = await fetch("/api/dues", {
        method: "GET",
        headers: { Authorization: `Bearer ${user.token}` },
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

  if (user.userType !== "Shopkeeper") {
    return (
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
              if (borrow.RollNo === user.rollNo){

                return (
                  <div>
                  <DuesDetailsForCustomer key={borrow._id} due={borrow} />
                  {/* <div>
                    Item - {borrow.Item} <br></br>
                    Amount - {borrow.Amount} <br></br>
                    RollNo - {borrow.RollNo} <br></br>
                    Description - {borrow.Description} <br />
                    shopName - {borrow.shopName}
                  </div> */}
                </div>
              );
            }
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="home"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        {Dues &&
          Dues.map((due) => {
            console.log(due);
            console.log("accha");
            if(due.shopName === user.shopName)
            return(

              <div>
                <DuesDetailsForShopkeeper key={due._id} due={due} />
              {/* <div>
                Item - {due.Item} <br></br>
                Amount - {due.Amount} <br></br>
                RollNo - {due.RollNo} <br></br>
                Description - {due.Description}
              </div> */}
            </div>
              )
          })}
        <DuesForm />
      </div>
    );
  }
};

export default Home;
