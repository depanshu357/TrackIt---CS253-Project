import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useExpenseContext } from "../../hooks/useExpenseContext";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Calendar from 'react-calendar'
import './calendarMonth.css';
import AddExpense from '../AddExpense.js';
import { pink, lightGreen, blue } from "@mui/material/colors";




const CalendarMonth = () => {
  const { expense, dispatch } = useExpenseContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);
  const [date, setDate] = useState(new Date());



  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = (e) => {
    e.preventDefault();
    console.log(e);
    setShowPopup(!showPopup);
  }


  console.log(expense);

  const onChange = date => {
    setDate(date)
  }
  var d = date;
  var month = '' + (d.getMonth() + 1);
  var date1 = '' + d.getDate();
  var year = '' + d.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (date1.length < 2) {
    date1 = '0' + date1;
  }

  const date2 = year + "-" + month + "-" + date1;
  console.log(date2);
  //console.log(typeof date2);


  var daily_category = [0, 0, 0, 0];
  var monthly_category = [0, 0, 0, 0];


  for (let i = 0; expense !== null && i < expense.length; i++) {

    if (expense[i].Date.substring(5, 7) == month) {
      if (expense[i].Category == "Food") {
        monthly_category[0] += expense[i].MoneySpent;
      }
      else if (expense[i].Category == "Health") {
        monthly_category[1] += expense[i].MoneySpent;
      }
      else if (expense[i].Category == "Shopping") {
        monthly_category[2] += expense[i].MoneySpent;
      }
      else if (expense[i].Category == "Others") {
        monthly_category[3] += expense[i].MoneySpent;
      }
    }

    if (expense[i].Date.substring(0, 10) == date2) {
      if (expense[i].Category == "Food") {
        daily_category[0] += expense[i].MoneySpent;
      }
      else if (expense[i].Category == "Health") {
        daily_category[1] += expense[i].MoneySpent;
      }
      else if (expense[i].Category == "Shopping") {
        daily_category[2] += expense[i].MoneySpent;
      }
      else if (expense[i].Category == "Others") {
        daily_category[3] += expense[i].MoneySpent;
      }
    }



  }



  const namesdate = expense !== null && expense.filter(function (el) {
    // console.log(el.Date, date2, el.Date == date2);
    return el.Date.substring(0, 10) == date2;
  });
  console.log(namesdate);

  const renderListOfUserNames = (namesdate) => {

    return namesdate && namesdate.map((name) => (
      <div className="hi"><div className="listelement">
        <div className="listdetails">
          <div className="content-upper">
            <div className="listname">{name.Item}</div>
            <div className="listmoney">₹{name.MoneySpent}</div>
          </div>
          <div className="content-lower">
            <div className="listdate">{name.Date.substring(0, 10)}</div>
            <div className="list-type">{name.Category}</div>
            <a
              className="btn btn-primary listcollapsebutton"
              data-bs-toggle="collapse"
              href={`#collapseExample${name._id}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <KeyboardArrowDownIcon />
            </a>
          </div>






        </div>


      </div>
        <div className="collapse listdescription" id={`collapseExample${name._id}`}>
          <div className=" listdesc">{name.Description}</div>
        </div></div>

    ));
  };


  return (
    <div className="everything" >
      {showPopup && (<div style={{ width: '100vw', height: '80vh', position: 'absolute', zIndex: '5' }}>
        <AddExpense setShowPopup={setShowPopup} showPopup={showPopup} />
      </div>)
      }












      <div clasName="big-container" style={{ filter: showPopup ? 'blur(5px)' : 'none', disabled: showPopup ? true : false, display: 'flex' }}>
        <div className="left-block">
          <div className="calendar-comp">
            <Calendar onChange={onChange} value={date} maxDetail='month' minDetail="month" defaultView="month" />
          </div>
          <div className="span2">
            <span className="bigboxm">
              <ShoppingCartIcon color="primary" />
              <div className="smallboxm ">
                <span className="text">{monthly_category[0]}</span>
              </div>
            </span>
            <span className="bigboxm">
              <HealthAndSafetyIcon sx={{ color: pink[500] }} />
              <div className="smallboxm  smallm">
                <span className="text">{monthly_category[1]}</span>
              </div>
            </span>
          </div>
          <div className="span2">
            <span className="bigboxm">
              <PaymentsIcon />
              <div className="smallboxm">
                <span className="text">{monthly_category[2]}</span>
              </div>
            </span>
            <span className="bigboxm">
              <FastfoodIcon sx={{ color: lightGreen }} />
              <div className="smallboxm">
                <span className="text">{monthly_category[3]}</span>
              </div>
            </span>
          </div>
          <div className="monthsummary-comp">
            <button className="add-expense-popup-button" onClick={handlePopup}>Add Expense</button>
          </div>
        </div>

        <div className="middle-block">
          <h1 className="dailytransactions">Daily Transactions</h1>
          <div className="expenses-comp">
            <ul>{renderListOfUserNames(namesdate)}</ul>
          </div>
        </div>



      </div >
    </div >
  );


};







export default CalendarMonth;



