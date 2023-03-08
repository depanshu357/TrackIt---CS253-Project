import React from 'react';
import stethoscope from "../images/stethoscope.png";
import "./monthSummary.css";

const MonthSummary = () => {
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '90vh'
    //   }}
    // >
    //   <h1>Current Month</h1>
    // </div>
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
  );
};

export default MonthSummary;








