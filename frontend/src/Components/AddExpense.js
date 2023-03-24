import React, { useState } from "react";
import "./AddExpense.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";
import "./expenseForm.css";
function AddExpense({ setShowPopup, showPopup }) {
  const { dispatch } = useExpenseContext();
  const { user } = useAuthContext();

  const [Item, setItem] = useState("");
  const [MoneySpent, setMoneySpent] = useState("");
  const [Description, setDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Category, setCategory] = useState("Others");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleCutButton = () => {
    setShowPopup((e) => !e);
  };

  const options = ["Food", "Health", "Shopping", "Others"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const expense = { Item, MoneySpent, Description, Date, Category };

    const response = await fetch("/api/expense", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      dispatch({ type: "CREATE_EXPENSE", payload: json });
      setItem("");
      setMoneySpent("");
      setDescription("");
      setError(null);
      setEmptyFields([]);
    }
  };

  return (
    <div
      className="add-expense-popup"
      style={{ display: showPopup ? "block" : "none" }}
    >
      {/* <div className='add-expense-close-popup' >
                <img src="/images/cross.png" alt="close" onClick={handleCutButton} style={{ cursor: 'pointer' }} />
            </div>
            <div className="add-expense-date">
                <h6>
                    Date:
                </h6>
                <input type="date" id="date1" name="date" />
            </div>
            <div className="add-expense-item">
                <h6>Item:</h6>
                <input type="text" id="add-expense-item" name="item" />
            </div>
            <div className="add-expense-amount">
                <h6>
                    Amount:
                </h6>
                <input type="number" id="add-expense-amount" name="amount" />
            </div>
            <div className="add-expense-category">
                <h6>
                    Category:
                </h6>
                <select name="cat" id="cat">
                    <option value="Food">Food</option>
                    <option value="Health">Health</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div className="add-expense-description">
                <h6>
                    Description:
                </h6>
                <input type="text" id="add-expense-description" name="description" />
            </div>
            <div className="add-expense-submit">
                <button type="submit" ><span style={{transform:"scale( 2 )"}}>+</span></button>
            </div> */}
      <form
        className="create-expense-form"
        onSubmit={handleSubmit}
        style={{ display: showPopup ? "block" : "none" }}
      >
        <h3>
          Add a New Purchase
          <span className="add-expense-close-popup" style={{width:"fit-content",position:"absolute",top:"23px",right:"10px",transform:"scale( 1.5 )"}}>
            <img
              src="/images/cross.png"
              alt="close"
              onClick={handleCutButton}
              style={{ cursor: "pointer" }}
            />
          </span>
        </h3>
        <div>
          <label>Expense Details:</label>
          <input
            type="text"
            onChange={(e) => setItem(e.target.value)}
            value={Item}
            // className={emptyFields?.includes("Item") ? "error" : ""}
          />
        </div>
        <div>
          <label>Money Spent:</label>
          <input
            type="number"
            onChange={(e) => setMoneySpent(e.target.value)}
            value={MoneySpent}
            // className={emptyFields.includes("MoneySpent") ? "error" : ""}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={Description}
            // className={emptyFields.includes("Description") ? "error" : ""}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={Date}
            // className={emptyFields.includes("Date") ? "error" : ""}
          />
        </div>
        <div>
          <label>Category:</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option>Please Select a Category</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
        {/* <input type="text"
        value={Category}
        onChange={e => setCategory(e.target.value)}
        className={emptyFields.includes('Category') ? 'error' : ''}
      /> */}
        <div style={{ flexDirection: "row-reverse" }}>
          <button className="add-expense-form">Add To List</button>
          {error && (
            <div className="error" color="red">
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
