import React from 'react';
import { useState } from "react";
import './seller.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Seller() {
  const [descrp, setDescrp] = useState("");
  const [amt, setAmt] = useState("");
  const [date, setDate] = useState("");
  const names = [
    {
      Description: "f",
      Date: "May 6 2023",
      Money: "78",
    },
    {
      Description: "ff",
      Date: "May 6 2023",
      Money: "78",
    },
    {
      Description: "fff",
      Date: "Aug 6 2023",
      Money: "78",
    },
  ];

  const renderListOfUserNames = (names) => {

    return names.map((name) => (
      <div>
        <div className='entry-display'>
          <div className='date'>{name.Date}</div>
          <div className='Description'>{name.Description}</div>
          <div className='amount'>{name.Money}</div>
        </div>
      </div>
    ));
  };

  return (

    <>
      <div className="top-buttons">
        <button className='b1'>Add Person</button>
        <button className='b2'>Total:</button>
        <button className='b3'>List People</button>
      </div>

      <div className="card-row1">
        <div className="card" style={{ height: "400px" }}>
          <div className="card-header">
            Person 1
          </div>
          <div className="card-body">
            <ul className="entries">{renderListOfUserNames(names)}</ul>
          </div>
          <div className='data-entry'>
            <label className='date-entry'>
              <input type="date" style={{ width: "90px" }} />
            </label>
            <label className='descrp-entry'>
              <input type="text" size="10px" style={{ width: "100px" }} placeholder="Description" />
            </label>
            <label className='amt-entry'>
              <input type="number" style={{ width: "75px" }} placeholder="Amount" />
            </label>
            <button className='add-button'>
              +
            </button>
          </div>
          <div className="card-footer">
            <button className="footbutton">Edit</button>
            <div className="foottotal">Total: </div>
            <div className="footvalue">1400</div>
          </div>
        </div>
        <div className="card" style={{ height: "400px" }}>
          <div className="card-header">
            Person 2
          </div>
          <div className="card-body">
            <ul className="entries">{renderListOfUserNames(names)}</ul>
          </div>
          <div className='data-entry'>
            <label className='date-entry'>
              <input type="date" style={{ width: "90px" }} />
            </label>
            <label className='descrp-entry'>
              <input type="text" size="10px" style={{ width: "100px" }} placeholder="Description" />
            </label>
            <label className='amt-entry'>
              <input type="number" style={{ width: "75px" }} placeholder="Amount" />
            </label>
            <button className='add-button'>
              +
            </button>
          </div>
          <div className="card-footer">
            <button className="footbutton">Edit</button>
            <div className="foottotal">Total: </div>
            <div className="footvalue">1400</div>
          </div>
        </div>

        <div className="card" style={{ height: "400px" }}>
          <div className="card-header">
            Person 3
          </div>
          <div className="card-body">
            <ul className="entries">{renderListOfUserNames(names)}</ul>
          </div>
          <div className='data-entry'>
            <label className='date-entry'>
              <input type="date" style={{ width: "90px" }} />
            </label>
            <label className='descrp-entry'>
              <input type="text" size="10px" style={{ width: "100px" }} placeholder="Description" />
            </label>
            <label className='amt-entry'>
              <input type="number" style={{ width: "75px" }} placeholder="Amount" />
            </label>
            <button className='add-button'>
              +
            </button>
          </div>
          <div className="card-footer">
            <button className="footbutton">Edit</button>
            <div className="foottotal">Total: </div>
            <div className="footvalue">1400</div>
          </div>
        </div>
      </div>

      <div className="card-row2">
        <div className="card" style={{ height: "400px" }}>
          <div className="card-header">
            Person 4
          </div>
          <div className="card-body">
            <ul className="entries">{renderListOfUserNames(names)}</ul>
          </div>
          <div className='data-entry'>
            <label className='date-entry'>
              <input type="date" style={{ width: "90px" }} />
            </label>
            <label className='descrp-entry'>
              <input type="text" size="10px" style={{ width: "100px" }} placeholder="Description" />
            </label>
            <label className='amt-entry'>
              <input type="number" style={{ width: "75px" }} placeholder="Amount" />
            </label>
            <button className='add-button'>
              +
            </button>
          </div>
          <div className="card-footer">
            <button className="footbutton">Edit</button>
            <div className="foottotal">Total: </div>
            <div className="footvalue">1400</div>
          </div>
        </div>
        <div className="card" style={{ height: "400px" }}>
          <div className="card-header">
            Person 5
          </div>
          <div className="card-body">
            <ul className="entries">{renderListOfUserNames(names)}</ul>
          </div>
          <div className='data-entry'>
            <label className='date-entry'>
              <input type="date" style={{ width: "90px" }} />
            </label>
            <label className='descrp-entry'>
              <input type="text" size="10px" style={{ width: "100px" }} placeholder="Description" />
            </label>
            <label className='amt-entry'>
              <input type="number" style={{ width: "75px" }} placeholder="Amount" />
            </label>
            <button className='add-button'>
              +
            </button>
          </div>
          <div className="card-footer">
            <button className="footbutton">Edit</button>
            <div className="foottotal">Total: </div>
            <div className="footvalue">1400</div>
          </div>
        </div>

        <div className="card" style={{ height: "400px" }}>
          <div className="card-header">
            Person 6
          </div>
          <div className="card-body">
            <ul className="entries">{renderListOfUserNames(names)}</ul>
          </div>
          <div className='data-entry'>
            <label className='date-entry'>
              <input type="date" style={{ width: "90px" }} />
            </label>
            <label className='descrp-entry'>
              <input type="text" size="10px" style={{ width: "100px" }} placeholder="Description" />
            </label>
            <label className='amt-entry'>
              <input type="number" style={{ width: "75px" }} placeholder="Amount" />
            </label>
            <button className='add-button'>
              +
            </button>
          </div>
          <div className="card-footer">
            <button className="footbutton">Edit</button>
            <div className="foottotal">Total: </div>
            <div className="footvalue">1400</div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Seller;


