import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useExpenseContext } from "../../hooks/useExpenseContext";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Calendar from 'react-calendar'
import { pink, lightGreen, blue } from "@mui/material/colors";
import './calendarMonth.css';
import CalenderMonthListElement from "./CalenderMonthListElement";




const CalendarMonth = () => {
  const { expense, dispatch } = useExpenseContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);
  const [date, setDate] = useState(new Date());
  const [hasData, setHasData] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })


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

  const namesdate = expense !== null && expense.filter(function (el) {
    // console.log(el.Date, date2, el.Date == date2);
    return el.Date.substring(0, 10) == date2;
  });
  console.log(namesdate);

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


    if (namesdate.length != 0 && !hasData) {
      setHasData(true);
    }
    if (namesdate.length == 0 && hasData) {
      setHasData(false);
    }
  }





  const renderListOfUserNames = (namesdate) => {

    return namesdate && namesdate.map((name) => (

      <CalenderMonthListElement name={name} />

    ));
  };


  return (
    <div className="everything" >
      {/* {showPopup && (<div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '5' }}>
        <AddExpense setShowPopup={setShowPopup} showPopup={showPopup} />
      </div>)
      } */}
      <div clasName="big-container-expenses" style={{ width: '100%', alignItems: window.innerWidth <= 1320 ? 'center' : 'inherit', flexDirection: window.innerWidth <= 1320 ? 'column' : 'row', filter: showPopup ? 'blur(5px)' : 'none', disabled: showPopup ? true : false, display: 'flex' }}>
        <div className="left-block">
          <div className="calendar-comp">
            <Calendar onChange={onChange} value={date} maxDetail='month' minDetail="month" defaultView="month" />
          </div>
          <div style={{ color: 'white', fontSize: '1rem', paddingLeft: '5px' }}>Current Month:</div>
          <div className="span2">
            <span className="bigboxm">
              <FastfoodIcon color="primary" />
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
              <ShoppingCartIcon />
              <div className="smallboxm">
                <span className="text">{monthly_category[2]}</span>
              </div>
            </span>
            <span className="bigboxm">
              <PaymentsIcon sx={{ color: lightGreen }} />
              <div className="smallboxm">
                <span className="text">{monthly_category[3]}</span>
              </div>
            </span>
          </div>

        </div>

        <div className="middle-block">
          <h1 className="dailytransactions">Daily Transactions</h1>
          <div className="expenses-comp">
            <ul>{hasData ? renderListOfUserNames(namesdate) :
              <div className="hi">
                <div className="listelement">
                  <div className="listdetails">
                    <div className="listname">No Entries</div>
                  </div>
                </div>
              </div>}
            </ul>
          </div>
        </div>



      </div >
    </div >
  );


};

export default CalendarMonth;