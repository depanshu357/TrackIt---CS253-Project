import React from "react";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDuesContext } from "../hooks/useDuesContext";
import "./seller.css";
import "bootstrap/dist/css/bootstrap.min.css";

import DuesForm from "../Components/DuesForm";
import DuesDetailsForShopkeeper from "../Components/DuesDetailsForShopkeeper";

const Shopkeeper = () => {
  const { Dues, dispatch: dispatchd } = useDuesContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);
  // const [customers,setCustomers] = useState([]);
  const [dataUniue, setDataUnique] = useState([]);
  var [index, setIndex] = useState(0);
  var total = 0;
  var customers = [];

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

  var customers = [];
  Dues?.forEach(function (due) {
    // console.log(due)
    customers.push(due.RollNo);
  });
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  customers = customers.filter(onlyUnique);
  console.log(customers);

  // useEffect(() => {
  //   // customers = [];
  //   Dues?.forEach(function (due) {
  //     // console.log(due)
  //     customers.push(due);
  //   });
  //   function onlyUnique(value, index, self) {
  //     return self.indexOf(value) === index;
  //   }
  //   customers = customers.filter(onlyUnique);
  //   console.log(customers);
  // }, [dispatchd, user]);

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
        <div className="entry-display">
          <div className="date">{name.Date}</div>
          <div className="Description">{name.Description}</div>
          <div className="amount">{name.Money}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="home-shopkeeper">
      {customers &&
        customers.map((customer) => (
          <div style={{ position: "relative" }}>
            <div
              className="card"
            >
              <div className="card-header">{customer}</div>
              {/* <div className="card-body">
                <ul className="entries">{renderListOfUserNames(names)}</ul>
              </div> */}
              {/* <div className="data-entry">
                <label className="date-entry">
                  <input type="date" style={{ width: "90px" }} />
                </label>
                <label className="descrp-entry">
                  <input
                    type="text"
                    size="10px"
                    style={{ width: "100px" }}
                    placeholder="Description"
                  />
                </label>
                <label className="amt-entry">
                  <input
                    type="number"
                    style={{ width: "75px" }}
                    placeholder="Amount"
                  />
                </label>
                <button className="add-button">+</button>
              </div> */}
              <div style={{ display: "none" }}>{(total = 0)}</div>
              <div style={{ padding: "10px", height: "100%" }}>
                {Dues &&
                  Dues.map((due) => {
                    if (due.RollNo == customer) {
                      console.log(due.Amount);
                      total = total + due.Amount;
                      return (
                        <DuesDetailsForShopkeeper key={due._id} due={due} />
                      );
                    }
                  })}
              </div>
              <div className="card-footer">
                {/* <button className="footbutton">Edit</button> */}
                <div className="foottotal">Total: </div>
                <div className="footvalue">{total}</div>
              </div>
            </div>
          </div>
        ))}

      {/* <DuesForm /> */}
    </div>
  );
};

export default Shopkeeper;
