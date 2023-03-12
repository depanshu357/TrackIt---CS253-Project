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
    // <div>
    //   <div>
    <div >
<div class="span2">
        <span class = "bigboxm dgreen">
          <div class="image">
            <img src={stethoscope} alt="" />
          </div>
          <div class = "smallboxm lgreen">
            <span class="text">546</span>
          </div>
        </span>
        <span class = "bigboxm dred bigm">
        <div class="image">
          <img src={stethoscope} alt=""  />
        </div>
        <div class = "smallboxm lred smallm">
          <span class="text">546</span>
        </div>
      </span>
      </div>
      <div class="span2">
        <span class = "bigboxm dyellow bigm">
          <div class="image">
            <img src={stethoscope} alt=""  />
          </div>
          <div class = "smallboxm lyellow smallm">
            <span class="text">546</span>
          </div>
        </span>
        <span class = "bigboxm dblue bigm">
        <div class="image">
          <img src={stethoscope} alt=""  />
        </div>
        <div class = "smallboxm lblue smallm">
          <span class="text">546</span>
        </div>
      </span>
      </div>
  </div>
        /* <div class = "bigboxm" >
          <div  class="image">
            <img src={stethoscope} alt="" />
          </div>
          <div class = "smallboxm">
            320
          </div>
        </div>
      </div>
      <div>
      <div class = "bigboxm" >
        <div  class="image">
          <img src={stethoscope} alt="" />
        </div>
        <div class = "smallboxm">
          534
        </div>
      </div>
      <div class = "bigboxm" >
        <div  class="image">
          <img src={stethoscope} alt="" />
        </div>
        <div class = "smallboxm">
          312
        </div>
      </div>
    </div>
  </div> */
  );
};

export default MonthSummary;








