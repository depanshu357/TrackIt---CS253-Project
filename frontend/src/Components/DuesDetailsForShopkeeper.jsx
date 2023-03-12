import React, { useState } from "react";
import { useDuesContext } from "../hooks/useDuesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./borrowings.css";
import "./DueDetails.css"

// date fns
const { format } = require("date-fns");

const DuesDetailsForShopkeeper = (props) => {
  const { Dues, dispatch } = useDuesContext();
  const { user } = useAuthContext();
  const [Paid, setPaid] = useState(props.due.Paid);
  // console.log(props.due.Paid)
  //  console.log(props.due.Paid)
  const handleChange = async (e) => {
    console.log(e.target);
    setPaid(!props.due.Paid);
    const due = { Paid: `${!props.due.Paid}` };
    // const due ={...(props.due),Paid:`${!(props.due.Paid)}`}
    // if(!props.due.Paid){
    //   e.target.style.backgroundColor = "green"
    // }else{
    //   e.target.style.backgroundColor = "red"
    // }
    // console.log(due);
    // console.log(props.due.Paid)
    console.log(due);
    const response = await fetch("/api/dues/" + props.due._id, {
      method: "PATCH",
      body: JSON.stringify(due),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (user) {
      // fetchPaidStatus();
    }
    const jsonAp = await response.json();
    console.log(jsonAp);

    if (response.ok) {
      dispatch({ type: "UPDATE_DUES", payload: jsonAp });
    }
    window.location.reload(true);
  };

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/dues/" + props.due._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_DUES", payload: json });
    }
  };

  return (
    <div >
      {console.log("working")}
      <div className="entry-display">
        <div className="date">
          {format(new Date(props.due.createdAt), "dd.MM.yyyy")}
        </div>
        <div className="Description">{props.due.Item}</div>
        <div className="due-details-for-Shopkeeper-right" style={{width:"30%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

        <div className="amount">{props.due.Amount}</div>
        <button
          onClick={handleChange}
          style={
            props.due.Paid
              ? { backgroundColor: "lightgreen", borderRadius: "5px" }
              : { backgroundColor: "tomato", borderRadius: "5px" }
          }
        >
          {props.due.Paid ? "Paid" : "Paid"}
        </button>
        <div>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href={"#collapseExample" + props.due._id}
            role="button"
            aria-expanded="false"
            aria-controls={"collapseExample" + props.due._id}
            style={{ margin: "0", padding: "0", width: "20px" }}
          >
            v
          </a>
        </div>
        </div>

      </div>
      <div class="collapse dep-collapse-box" id={"collapseExample" + props.due._id} >
        <div class="collapse-inside">Description - {props.due.Description} </div>
        <span
          className="material-symbols-outlined delete-button"
          onClick={handleClick}
          style={{ cursor: "pointer"}}
        >
          
        </span>
      </div>
      {/* Item - {props.due.Item} <br></br>
      Amount - {props.due.Amount} <br></br>
      RollNo - {props.due.RollNo} <br></br>
      Description - {props.due.Description} <br /> */}
      {/* <input
        class="form-check-input"
        type="checkbox"
        value={Paid}
        id="flexCheckDefault"
        onChange={handleChange}
        style={{ border: "2px solid red" }}
        checked="false"
      /> */}
      {/* <label
        class="form-check-label"
        for="flexCheckDefault"
      >
        {(props.due.Paid)?"Mark as Paid":"Mark as unPaid"}
      </label>{" "} */}
    </div>
  );
};

export default DuesDetailsForShopkeeper;
