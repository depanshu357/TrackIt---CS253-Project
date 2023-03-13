import React, { useState } from 'react'
import './AddExpense.css'
function AddExpense({ setShowPopup, showPopup }) {



    const handleCutButton = () => {
        setShowPopup(e => !e);
    }



    return (
        <div className="add-expense-popup" style={{ display: showPopup ? 'block' : 'none' }}>

            <div className='add-expense-close-popup' >
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
                <button type="submit" ><h1>+</h1></button>
            </div>
        </div>

    )
}

export default AddExpense;