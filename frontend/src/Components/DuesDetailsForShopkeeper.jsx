import React, { useState } from "react";
import { useDuesContext } from "../hooks/useDuesContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DuesDetailsForShopkeeper = (props) => {
  const { Dues,dispatch } = useDuesContext();
  const { user } = useAuthContext();
  const [Paid, setPaid] = useState(props.due.Paid);
  // console.log(props.due.Paid)
  //  console.log(props.due.Paid)
  const handleChange = async (e) => {
    console.log(e.target);
    setPaid( !(props.due.Paid));
    const due ={Paid:`${!(props.due.Paid)}`}
    // const due ={...(props.due),Paid:`${!(props.due.Paid)}`}
    // if(!props.due.Paid){
    //   e.target.style.backgroundColor = "green"
    // }else{
    //   e.target.style.backgroundColor = "red"
    // }
    // console.log(due);
    // console.log(props.due.Paid)
    console.log(due)
    const response = await fetch( "/api/dues/" + props.due._id,{
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
    const jsonAp = await response.json();
    console.log(jsonAp)

    if(response.ok){
      dispatch({type: 'UPDATE_DUES',payload: jsonAp});
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
    <div>
      Item - {props.due.Item} <br></br>
      Amount - {props.due.Amount} <br></br>
      RollNo - {props.due.RollNo} <br></br>
      Description - {props.due.Description} <br />
      {/* <input
        class="form-check-input"
        type="checkbox"
        value={Paid}
        id="flexCheckDefault"
        onChange={handleChange}
        style={{ border: "2px solid red" }}
        checked="false"
      /> */}
      <button
      onClick={handleChange}
      style={props.due.Paid?{backgroundColor:"green"}:{backgroundColor:"red"}}
      >
        {(props.due.Paid)?"Paid":"Not Paid"}
      </button>
      {/* <label
        class="form-check-label"
        for="flexCheckDefault"
      >
        {(props.due.Paid)?"Mark as Paid":"Mark as unPaid"}
      </label>{" "} */}
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
