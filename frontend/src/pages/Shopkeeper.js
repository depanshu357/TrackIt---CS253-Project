import React from 'react'
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDuesContext } from "../hooks/useDuesContext";

import DuesForm from "../Components/DuesForm";
import DuesDetailsForShopkeeper from "../Components/DuesDetailsForShopkeeper";

const Shopkeeper = () => {
    const { Dues, dispatch: dispatchd } = useDuesContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);


    useEffect(() => {
        const fetchDues = async () => {
          const response = await fetch(`/api/dues/`, {
            method: "GET",
            headers: { Authorization: `Bearer ${user.token}` },
          });
          const json = await response.json();
    
          if (response.ok) {
            console.log(" dues coming up ");
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

  return (
    <div
        className="home"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
          {/* <div>
            Item - {due.Item} <br></br>
            Amount - {due.Amount} <br></br>
            RollNo - {due.RollNo} <br></br>
            Description - {due.Description}
          </div> */}
        {Dues &&
          Dues.map((due) => {
            // console.log(due);
            // console.log("accha");
            if(due.shopName === user.shopName)
            return(

           
                <DuesDetailsForShopkeeper key={due._id} due={due} />
           
              )
          })}
        <DuesForm />
      </div>
  )
}

export default Shopkeeper
