import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import "./calendarYear.css";
import "./borrowings.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDuesContext } from "../hooks/useDuesContext";

const CalendarYear = () => {
  const [date, setDate] = useState(new Date());
  const { Dues, dispatch: dispatchd } = useDuesContext();
  const { user } = useAuthContext;

  const handleClick = async () => {
    console.log("delete clicked");
    if (!user) {
      return;
    }
  };

  const onChange = (date) => {
    setDate(date);
  };
  var d = date;
  var month = "" + (d.getMonth() + 1);
  //var date1 = '' + d.getDate();
  var year = "" + d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
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
      const response = await fetch(`/api/dues`, {
        method: "GET",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        console.log(" dues coming up ");
        // console.log(json[0])
        // setBorrows(json);
        // console.log(borrows[0].RollNo);
        dispatchd({ type: "SET_DUESS", payload: json });
      }
    };
    if (user) {
      fetchDues();
    }
  }, [dispatchd, user]);

  const namesdate = borrowings_data.filter(function (el) {
    // console.log(el.Date, date2, el.Date == date2);
    return el.Date.substring(0, 7) == date2;
  });
  // console.log(namesdate);

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
              {name.Paid ? (
                <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Paid
                </span>
              ) : (
                <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                  Unpaid
                </span>
              )}
            </span>
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
          <div className=" listdesc1">
            <span style={{ color: "gray" }}>Description: </span>
            {name.Description}
          </div>
        </div>
      ));
  };

  return (
    <>
      <div className="everything-b">
        <div className="calendaryear-comp">
          <Calendar
            onChange={onChange}
            value={date}
            maxDetail="year"
            minDetail="year"
            defaultView="year"
          />
        </div>
        <div className="right">
          <h1 className="monthlyborrowings">Monthly Borrowings</h1>
          <div className="borrowings-comp">
            {/* <ul>{renderListOfUserNames(namesdate)}</ul> */}
            {Dues.map((name) => {
             if(210316 == name.RollNo) 
            return(
              <ul key={name._id}>
                <div className="hi1">
                  <div className="listdetails1">
                    <span className="listname1-span">
                  
                      <div className="listname1">{name.shopName} {console.log(user)}</div>
                    </span>
                    <span className="listmoney1-span">
                      <div className="listmoney1">₹{name.Amount}</div>
                    </span>
                    <span className="listdate1-span">
                      <div className="listdate1">
                        {name.Date.substring(0, 10)}
                      </div>
                    </span>
                    <span className="listpaid1-span">
                      {/* <div className="listdate1" style={{ color: name.Paid ? 'green' : 'red' }} >{name.Paid ? 'Paid' : 'Unpaid'}</div> */}
                      {name.Paid ? (
                        <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                          Paid
                        </span>
                      ) : (
                        <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                          <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                          Unpaid
                        </span>
                      )}
                    </span>
                  </div>
                  <div className=" listdesc1">
                    <span style={{ color: "gray" }}>Description: </span>
                    {name.Description}
                  </div>
                </div>
              </ul>)
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarYear;
