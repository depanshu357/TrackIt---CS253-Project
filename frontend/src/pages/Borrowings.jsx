import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";
import { useDuesContext } from "../hooks/useDuesContext";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// components
import ExpenseDetails from "../Components/ExpenseDetails";
import ExpenseForm from "../Components/ExpenseForm";
import DuesDetailsForCustomer from "../Components/DuesDetailsForCustomer";
import Calendar from 'react-calendar'
// import "./customer.css";
import "./Borrowings.css"
import { kk } from "date-fns/locale";
import { pink, lightGreen, blue } from "@mui/material/colors";

const Borrowings = () => {
  const { expense, dispatch } = useExpenseContext();
  const { user } = useAuthContext();
  const [rollNo, setRollNo] = useState(null)
  const [borrows, setBorrows] = useState(null);
  const [date, setDate] = useState(new Date());
  const [hasData, setHasData] = useState(false);
  const { Dues, dispatch: dispatchd } = useDuesContext();

  useEffect(() => {
    const fetchExpense = async () => {
      const response = await fetch("/api/expense", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EXPENSES", payload: json });
        console.log(user)
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
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {

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

  const date_dep = new Date();
  const todays_month = date_dep.getMonth();
  const onChange = date => {
    setDate(date)
  }
  var d = date;
  var month = '' + (d.getMonth() + 1);
  //var date1 = '' + d.getDate();
  var year = '' + d.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  // if (date1.length < 2) {
  //   date1 = '0' + date1;
  // }

  const date2 = year + "-" + month;
  console.log(date2);
  //console.log(typeof date2);

  var borrowings_data = [];
  for (let i = 0; i < Dues.length; i++) {
    if (Dues[i].RollNo == user.rollNo) {
      borrowings_data.push(Dues[i]);
    }
  }
  console.log(user.rollNo);
  console.log(Dues);
  const namesdate = borrowings_data.filter(function (el) {
    // console.log(el.Date, date2, el.Date == date2);
    return el.Date.substring(0, 7) == date2;
  });
  if (namesdate.length != 0 && !hasData) {
    setHasData(true);
  }
  if (namesdate.length == 0 && hasData) {
    setHasData(false);
  }

  const renderListOfUserNames = (namesdate) => {

    return namesdate.map((name) => (

      <div className="hi1">

        <div className="listdetails1">
          <span className="listname1-span">
            <div className="listname1">{name.shopName}</div>
          </span>
          <span className="listmoney1-span">
            <div className="listmoney1">₹{name.Amount}</div>
          </span>
          <span className="listdate1-span">
            <div className="listdate1">{name.Date.substring(0, 10)}</div>
          </span>
          <span className="listpaid1-span">
            {/* <div className="listdate1" style={{ color: name.Paid ? 'green' : 'red' }} >{name.Paid ? 'Paid' : 'Unpaid'}</div> */}
            {name.Paid ? <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
              Paid
            </span> : <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
              <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
              Unpaid
            </span>}
          </span>
          {/* <button className="delete-btn" onClick={handleClick} >delete</button> */}


          {/* <a
            className="btn btn-custom listcollapsebutton1"
            data-bs-toggle="collapse"
            href={`#collapseExample${name._id}`}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span className="textv">
              <KeyboardArrowDownIcon />
            </span>
          </a> */}

        </div>
        <div className=" listdesc1"><span style={{ color: 'gray' }}>Description: </span>{name.Description}</div>

        {/* <div className="collapse listdescription1" id={`collapseExample${name._id}`}>
          <div className=" listdesc1">{name.Item}</div>
        </div> */}
      </div>

    ));
  };

  return (
    <>

      <div className="everything-b">
        <div className="calendaryear-comp">
          <Calendar onChange={onChange} value={date} maxDetail='year' minDetail="year" defaultView="year" />
        </div>
        <div className="right">
          <h1 className="monthlyborrowings">Monthly Borrowings</h1>
          <div className="borrowings-comp">
            <ul>{hasData ? renderListOfUserNames(namesdate) :
              <div className="hi1">

                <div className="listdetails1">
                  <span className="listname1-span">
                    <div className="listname1">No Entries</div>
                  </span>
                </div>
              </div>
            }</ul>
          </div>

        </div>
      </div>


    </>
  );
};

export default Borrowings;
