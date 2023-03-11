import React, { useState } from "react";
import stethoscope from "../images/stethoscope.png";

import { render } from "react-dom";
import Calendar from 'react-calendar'
import './calendarMonth.css';
// import Features from "./Features";

import 'bootstrap/dist/css/bootstrap.min.css';

const CalendarMonth = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date =>{
    setDate(date)
  }
  var d = date;
  var month = d.getMonth()+1;
  var date1 = d.getDate();
 var  year = d.getFullYear();
  const date2 = year+"-"+month+"-"+date1;
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
      description: "ff",
      name: "Hall 1 Canteen",
      type: "Food",
      Date: "2023-3-21",
      Money: "78",
    },
    {
      id:"234",
      description: "fff",
      name: "Hall 1 Canteen",
      type: "Food",
      Date: "2023-3-21",
      Money: "78",
    },
  ];

  const namesdate = names.filter(function(el){
    return el.Date == date2;
  });
  console.log(namesdate);

  const renderListOfUserNames = (namesdate) => {
    
    return namesdate.map((name) => (
      <div
        style={{
          backgroundColor: "grey",
          paddingBottom: "3%",
          marginBottom: "10%",
        }}
      >
        <img
          src={stethoscope}
          alt=""
          style={{ width: "10%", float: "left", paddingTop: "5%" }}
        />
        <span>{name.name}</span> &emsp;&emsp;&emsp;&emsp;{" "}
        <span>{name.Money}</span>
        <br />
        <br />
        <br />
        <span>{name.Date}</span> &emsp;&emsp;&emsp;&emsp;{" "}
        <span>{name.type}</span>
        <p>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href={`#collapseExample${name.id}`}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            v
          </a>
          {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button> */}
        </p>
        <div class="collapse" id={`collapseExample${name.id}`}>
          <div class="card card-body">{name.description}</div>
        </div>
      </div>
    ));
  };
  

  return (<div>
  
  <div> <Calendar onChange={onChange} value={date} maxDetail='month' minDetail="month" defaultView="month"/>  </div>
   
  
  <div>
      <div>
        <div class = "bigboxm">
          <span class="image">
            <img src={stethoscope} alt="" />
          </span>
          <span class = "smallboxm">
            546
          </span>
        </div>
        <div class = "bigboxm" >
          <span  class="image">
            <img src={stethoscope} alt="" />
          </span>
          <span class = "smallboxm">
            320
          </span>
        </div>
      </div>
      <div>
      <div class = "bigboxm" >
        <span  class="image">
          <img src={stethoscope} alt="" />
        </span>
        <span class = "smallboxm">
          534
        </span>
      </div>
      <div class = "bigboxm" >
        <span  class="image">
          <img src={stethoscope} alt="" />
        </span>
        <span class = "smallboxm">
          312
        </span>
      </div>
    </div>
  </div>

  

    <div>
      <ul>{renderListOfUserNames(namesdate)}</ul>
    </div>
  
    <div>
    <div class = "bigbox" >
  <div>
  <img src={stethoscope} alt="" />

    </div>
    <div class = "smallbox">
      
          546
      
    </div>
</div>
    <div class = "bigbox" >
        <div>
        <img src={stethoscope} alt="" />
          </div>
          <div class = "smallbox">
            
                320
            
          </div>
          </div>
  </div>
  <div>
    <div class = "bigbox" >
  <div>
  <img src={stethoscope} alt="" />
    </div>
    <div class = "smallbox">
      
         534
      
    </div>
    </div>
    <div class = "bigbox" >
        <div>
        <img src={stethoscope} alt="" />
          </div>
          <div class = "smallbox">
            
                312
            
          </div>
          </div>
  </div>







  </div>);


};

 


render(
<CalendarMonth />, document.querySelector("#root")

);



export default CalendarMonth;



