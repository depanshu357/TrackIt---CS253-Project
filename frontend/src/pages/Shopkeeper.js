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
  const [d, setD] = useState("none");
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
        dispatchd({ type: "SET_DUESS", payload: json });
        // console.log(Dues)
      }
    };
    if (user) {
      fetchDues();
      console.log(user);
    }
    console.log(Dues);
  }, [dispatchd, user]);

  var customers = [];
  Dues && Dues.forEach(function (due) {
    // console.log(due)
    customers.push(due.RollNo);
  });
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  customers = customers.filter(onlyUnique);
  console.log(customers);

  const handlePlusButton = () => {
    setD("block")
  }

  return (
    <div className="home-shopkeeper">
      <div className="shopkeeper-plus-button" onClick={handlePlusButton}></div>
      <div className="pop-up-card-dues" style={{ display: d, color: "white" }}>
        <DuesForm d={d} setD={setD} />
      </div>
      {customers &&
        customers.map((customer) => (
          <div style={{ position: "relative" }}>
            <div
              className="card" style={{backgroundColor: "#191c24"}}
            >
              <div className="card-header" style={{borderBottom: "2px solid line white"}}>{customer}</div>
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
                <div className="foottotal">Total: </div>
                <div className="footvalue">{total}</div>
              </div>
            </div>
          </div>
        ))}

    </div>
  );
};

export default Shopkeeper;