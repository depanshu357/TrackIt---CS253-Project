import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Calendar from 'react-calendar'
import './calendarYear.css';
import "./borrowings.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DuesForm from "../Components/DuesForm";
import DuesDetailsForShopkeeper from "../Components/DuesDetailsForShopkeeper";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDuesContext } from "../hooks/useDuesContext";



const CalendarYear = () => {
  const [date, setDate] = useState(new Date());
  const { Dues, dispatch: dispatchd } = useDuesContext();
  const { user } = useAuthContext;


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
  console.log(Dues);
  for (let i = 0; i < Dues.length; i++) {
    if (Dues[i].RollNo) {
      borrowings_data.push(Dues[i]);
    }
  }


  useEffect(() => {
    const fetchDues = async () => {
      const response = await fetch(`/api/dues/${user.shopName}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        console.log(" dues coming up ");
        // console.log(json[0])
        // setBorrows(json);
        // console.log(borrows[0].RollNo);
        // console.log(borrows);
        dispatchd({ type: "SET_DUESS", payload: json });
        // console.log(Dues)
      }
      // json?.forEach(function(due){
      //   // console.log(due)
      //   setCustomers(pre => pre + [(due.RollNo)])
      // }
      // )
      // function onlyUnique(value, index, self) {
      //   return self.indexOf(value) === index;
      // }
      // setCustomers(pre => pre.filter(onlyUnique));
      // console.log(customers);
    };
    if (user) {
      fetchDues();
      console.log(user);
    }
    console.log(Dues);
  }, [dispatchd, user]);

  const namesdate = borrowings_data.filter(function (el) {
    // console.log(el.Date, date2, el.Date == date2);
    return el.Date.substring(0, 7) == date2;
  });
  console.log(namesdate);

  const renderListOfUserNames = (namesdate) => {

    return namesdate.map((name) => (
      <div class="hi1">

        <div class="listdetails1">
          <div class="listname1">{name.Item}</div>
<<<<<<< HEAD
          <div class="listmoney1">₹{name.Amount}</div>
          <div class="listdate1">{name.Date.substring(0, 10)}</div>
          <div class="listdate1">{name.Paid ? 'Paid' : 'Unpaid'}</div>

=======
          {/* <div class="listmoney1">{name.MoneySpent}</div> */}
          {/* <div class="listdate1">{name.Date.substring(0, 10)}</div> */}
          <div class="listmoney1">₹{name.Amount}</div>
          <div class="listdate1">{name.Date.substring(0, 10)}</div>
          <div class="listdate1">{name.Paid ? 'Paid' : 'Unpaid'}</div>
>>>>>>> 4748b02b839b6ffa9f51556c08f5e05a4f69db26
          <a
            class="btn btn-primary listcollapsebutton1"
            data-bs-toggle="collapse"
            href={`#collapseExample${name._id}`}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span class="textv">
              <KeyboardArrowDownIcon />
            </span>
          </a>







        </div>
        <div class="collapse listdescription1" id={`collapseExample${name._id}`}>
          <div class=" listdesc1">{name.Description}</div>
        </div></div>

    ));
  };


  return (
    <>

      <div class="everything-b">
        <div class="calendaryear-comp">
          <Calendar onChange={onChange} value={date} maxDetail='year' minDetail="year" defaultView="year" />
        </div>
        <div className="right">
          <h1 class="monthlyborrowings">Monthly Borrowings</h1>
          <div class="borrowings-comp">
            <ul>{renderListOfUserNames(namesdate)}</ul>
          </div>
        </div>
      </div>


    </>
  );
};

// render(
// <CalendarYear />, document.querySelector("#root")

// );

export default CalendarYear;


