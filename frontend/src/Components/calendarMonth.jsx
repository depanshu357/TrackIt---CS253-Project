import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";
import stethoscope from "../images/stethoscope.png";
import "./monthSummary.css"
import "./expenses.css";
// components
// import ExpenseDetails from "./ExpenseDetails";
// import ExpenseForm from "./ExpenseForm";

import { render } from "react-dom";
import Calendar from 'react-calendar'
import './calendarMonth.css';
// import Features from "./Features";
// import 'bootstrap/dist/css/bootstrap.min.css';




const CalendarMonth = () => {
  const { expense, dispatch } = useExpenseContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);
  const [date, setDate] = useState(new Date());



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


  for (let i = 0; i < expense.length; i++) {

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




  //const {user} = useAuthContext;
  const names = [
    {
      id: "123",
      description: "f",
      name: "Hall 1 Canteen",
      type: "Food",
      Date: "May 6 2023",
      Money: "78",
    },
    {
      id: "345",
      description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
      name: "Hall 1 Canteen",
      type: "Food",
      Date: "2023-03-12",
      Money: 68,
    },
    {
      id: "234",
      description: "fffffffffffffff fffffffffffffffffff fffffffffffffffff f fffffffffffffff fffffffffff fffffffffff ffffffffff",
      name: "Hall 1 Canteen",
      type: "Food",
      Date: "2023-03-12",
      Money: "78",
    },
    {
      id: "3645",
      description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
      name: "Hall 1 Canteen",
      type: "Food",
      Date: "2023-03-12",
      Money: 68,
    },
    {
      id: "3456",
      description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
      name: "Hall 1 Canteen",
      type: "Food",
      Date: "2023-03-12",
      Money: 68,
    },
    {
      id: "3465",
      description: "fffffffffffffff ffffffffffffffffff ffffffff  ffffffffffffff ffffffffffffffffffff ffffffffffffffffffff fffffffffffffffffffff",
      name: "Hall 1 Canteen",
      type: "Food",
      Date: "2023-03-12",
      Money: 68,
    }
  ];

  const namesdate = expense.filter(function (el) {
    // console.log(el.Date, date2, el.Date == date2);
    return el.Date.substring(0, 10) == date2;
  });
  console.log(namesdate);

  const renderListOfUserNames = (namesdate) => {

    return namesdate.map((name) => (
      <div class="hi"><div class="listelement">
        <div class="listimage">
          <img
            src={stethoscope}
            alt=""


          />
        </div>
        <div class="listdetails">
          <div class="listname">{name.Item}</div>
          <div class="listmoney">{name.MoneySpent}</div>
          <div class="listdate">{name.Date.substring(0, 10)}</div>
          <div class="listtype">{name.Category}</div>


          <a
            class="btn btn-primary listcollapsebutton"
            data-bs-toggle="collapse"
            href={`#collapseExample${name._id}`}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            v
          </a>




        </div>


      </div>
        <div class="collapse listdescription" id={`collapseExample${name._id}`}>
          <div class=" listdesc">{name.Description}</div>
        </div></div>

    ));
  };


  return (
    <div class="everything">

      <div class="calendar-comp">
        <Calendar onChange={onChange} value={date} maxDetail='month' minDetail="month" defaultView="month" />
      </div>



      <div class="monthsummary-comp">
        <div class="span2">
          <span class="bigboxm dgreen">
            <div class="image">
              <img src={stethoscope} alt="" />
            </div>
            <div class="smallboxm lgreen">
              <span class="text">{monthly_category[0]}</span>
            </div>
          </span>
          <span class="bigboxm dred bigm">
            <div class="image">
              <img src={stethoscope} alt="" />
            </div>
            <div class="smallboxm lred smallm">
              <span class="text">{monthly_category[1]}</span>
            </div>
          </span>
        </div>
        <div class="span2">
          <span class="bigboxm dyellow bigm">
            <div class="image">
              <img src={stethoscope} alt="" />
            </div>
            <div class="smallboxm lyellow smallm">
              <span class="text">{monthly_category[2]}</span>
            </div>
          </span>
          <span class="bigboxm dblue bigm">
            <div class="image">
              <img src={stethoscope} alt="" />
            </div>
            <div class="smallboxm lblue smallm">
              <span class="text">{monthly_category[3]}</span>
            </div>
          </span>
        </div>
      </div>





      <h1 class="dailytransactions">Daily Transactions</h1>
      <div class="expenses-comp">
        <ul>{renderListOfUserNames(namesdate)}</ul>
      </div>

      <div class="dailysummary-comp">
        <div>
          <div class="bigbox dgreen" >
            <div>
              <img src={stethoscope} alt="" class="imaged" />
            </div>
            <div class="smallbox lgreen">

              {daily_category[0]}


            </div>
          </div>
          <div class="bigbox dred" >
            <div>
              <img src={stethoscope} alt="" class="imaged" />
            </div>
            <div class="smallbox lred">

              {daily_category[1]}


            </div>
          </div>
        </div>
        <div>
          <div class="bigbox dyellow" >
            <div>
              <img src={stethoscope} alt="" class="imaged" />
            </div>
            <div class="smallbox lyellow">

              {daily_category[2]}

            </div>
          </div>
          <div class="bigbox dblue" >
            <div>
              <img src={stethoscope} alt="" class="imaged" />
            </div>
            <div class="smallbox lblue">

              {daily_category[3]}


            </div>
          </div>
        </div>
      </div>



    </div>
  );


};







export default CalendarMonth;



