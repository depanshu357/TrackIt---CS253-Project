import React from "react";
import "./duesDetailsForCustomer.css";
import Button from "@mui/material/Button";

const DuesDetailsForCustomer = (props) => {
  return (
    <div className="due-details-for-customer">
      <span>{props.due.Item}</span>
      <span>{props.due.Amount}</span>
      <span>
        {props.due.Paid ? (
          <div style={{border:"1px solid #00d25b",padding:"5px",borderRadius:"5px",color:"#00d25b"}}>
            Approved
          </div>
        ) : (
          <div style={{border:"1px solid red",padding:"5px",borderRadius:"5px",color:"red"}}>
            Pending
          </div>
        )}{" "}
        <br />
      </span>
    </div>
  );
};

export default DuesDetailsForCustomer;
