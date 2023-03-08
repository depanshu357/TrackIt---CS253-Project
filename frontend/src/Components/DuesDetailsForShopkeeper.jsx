import React, { useState } from "react";
import { useDuesContext } from "../hooks/useDuesContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DuesDetailsForShopkeeper = (props) => {
  const { dispatch } = useDuesContext();
  const { user } = useAuthContext();
  const [Paid, setPaid] = useState(true);
  console.log(props.due.Paid)

  const handleChange = async (e) => {
    console.log(e.target.checked);
    setPaid( e => !e);
    const due ={...(props.due),Paid:`${Paid}`}
    console.log(due);
    console.log(props.due.Paid)
    const fetchPaidStatus = await fetch( "/api/dues/" + props.due._id,{
       method:"PATCH",
       body: JSON.stringify(
        due
       ),
       headers:{
         'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
       }
    })
    if(user){
      // fetchPaidStatus();
    }
    const json = await fetchPaidStatus.json();
    if(fetchPaidStatus.ok){
      dispatch({type: 'UPDATE_DUES',payload: json});
    }
    // console.log()
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
    <div>
      Item - {props.due.Item} <br></br>
      Amount - {props.due.Amount} <br></br>
      RollNo - {props.due.RollNo} <br></br>
      Description - {props.due.Description} <br />
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onChange={handleChange}
        style={{ border: "2px solid red" }}
      />
      <label
        class="form-check-label"
        for="flexCheckDefault"
        checked={props.due.Paid ? true : false}
      >
        {Paid?"Mark as Paid":"Mark as unPaid"}
      </label>{" "}
      <br />
      <span
        className="material-symbols-outlined"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        delete
      </span>
    </div>
  );
};

export default DuesDetailsForShopkeeper;
