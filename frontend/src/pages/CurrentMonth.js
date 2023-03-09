import React from 'react';
import "./Entrycard.css";
const CurrentMonth = () => {
    return (
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '110vh'
        }}>
            <form id="form" action="/" >
                <h1>Add your Expense</h1>

                <div className="input-control">
                    <label htmlFor="date"><h4> Date:</h4></label>
                    <input type="date" id="date1" name="date" />
                </div>
                <br />
                <div className="input-control">
                    <label htmlFor="username"><h4> Amount:</h4></label>
                    <input id="username" name="username" type="text" />
                    {/* <div className="error" /> */}
                </div>
                <br />
                <div className="input-control">
                    <label htmlFor="cat"><h4> Category:</h4></label>
                    <select name="cat" id="cat">
                        <option value="shopping">Shopping</option>
                        <option value="health">Health</option>
                        <option value="food">Food</option>
                        <option value="travel">Travel</option>
                    </select>
                </div>
                <br />
                <div class="input-control">
                    <label for="remarks"><h4> Remarks:</h4></label>
                    <textarea id="remark" name="remarks" rows="4" cols="50"></textarea>
                </div>

                <button type="submit" ><h1 style={{ alignItems: 'center', height: '20px' }}>+</h1></button>
            </form>
        </div>
    );
};

export default CurrentMonth;