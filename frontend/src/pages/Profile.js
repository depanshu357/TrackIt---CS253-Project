import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useExpenseContext } from "../hooks/useExpenseContext";
import { useDuesContext } from "../hooks/useDuesContext";
import "./profile.css";

const Profile = () => {
  const { expense, dispatch } = useExpenseContext();
  const { user } = useAuthContext();
  const [borrows, setBorrows] = useState(null);
  const [budget,setBudget] = useState(15000);
  const [message, setMessage] = useState(null);
  const { Dues, dispatch: dispatchd } = useDuesContext();
  const handleClick = (e) =>{
    const updateBudget = { budget };
    
        console.log("ok to proceed")
        const fetchUpdateBudget = async() =>{

            const response = await fetch("/api/user/setBudget", {
                method: "POST",
                body: JSON.stringify(updateBudget),
                headers: { "Content-Type": "application/json" },
            });
            const json = await response.json();
            console.log(response)
            if (response.ok) {
              setMessage("Budget update");
            } else {
              setMessage("Error in updating");
            }
        
        fetchUpdateBudget();
    }
  }

  return (
    <div className="profile-page">
      <div className="profile-page-card">
        <div className="profile-page-cards">
          <span>Email</span>
          <span>{user.email}</span>
        </div>
        <div className="profile-page-cards">
          <span>userType</span>
          <span>{user.userType}</span>
        </div>
        <div className="profile-page-cards">
          <span>{user.userType == "Customer" ? `RollNo` : `Shop Name`}</span>
          <span>
            {user.userType == "Customer"
              ? `${user.rollNo}`
              : `${user.shopName}`}
          </span>
        </div>
        <div className="profile-page-cards">
          <span>Budget</span>
          <span>{user.budget ? user.budget : "15000"}</span>
        </div>
        {/* <div className="profile-page-cards" style={{height:"55px"}}>
          <button style={{color:"white",backgroundColor:"#00d25b",padding:"5px",borderRadius:"7px"}} onClick={handleClick}>SetBudget</button>
          <input
          type="number"
          onChange={e=> setBudget(e.target.value)}
          style={{backgroundColor:"black",color:"white"}}
          value={budget}
          />
          <span>{user.budget ? user.budget : "15000"}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
