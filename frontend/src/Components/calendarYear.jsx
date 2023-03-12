import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from 'react-calendar'
import './calendarYear.css';
import "./borrowings.css";


const CalendarYear = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date =>{
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
      id:"234",
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

  const namesdate = names.filter(function (el) {
    // console.log(el.Date, date2, el.Date == date2);
    return el.Date.substring(0, 7) == date2;
  });
  console.log(namesdate);

  const renderListOfUserNames = (namesdate) => {

    return namesdate.map((name) => (
      <div class="hi1">
        
        <div class ="listdetails1">
            <div class="listname1">{name.name}</div>
            <div class="listmoney1">{name.Money}</div>
            <div class="listdate1">{name.Date}</div>
            
            
        
          <a
            class="btn btn-primary listcollapsebutton1"
            data-bs-toggle="collapse"
            href={`#collapseExample${name.id}`}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            v
          </a>
          
        
        

        
        
    
      </div>
      <div class="collapse listdescription1" id={`collapseExample${name.id}`}>
      <div class=" listdesc1">{name.description}</div>
    </div></div>
      
    ));
  };
  

  return (
    <div  class="everything-b">
  <div class="calendaryear-comp">
    <Calendar onChange={onChange} value={date} maxDetail='year' minDetail="year" defaultView="year" />  </div>
    <h1 class="monthlyborrowings">Monthly Borrowings</h1>
      <div class="borrowings-comp">
      <ul>{renderListOfUserNames(namesdate)}</ul>
    </div>
    </div>
    );
};

// render(
// <CalendarYear />, document.querySelector("#root")

// );

export default CalendarYear;


