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
      <div className="span2">
        <span className="bigboxm dgreen">
          <div className="image">
            <img src={stethoscope} alt="" />
          </div>
          <div className="smallboxm lgreen">
            <span className="text">546</span>
          </div>
        </span>
        <span className="bigboxm dred bigm">
          <div className="image">
            <img src={stethoscope} alt="" />
          </div>
          <div className="smallboxm lred smallm">
            <span className="text">546</span>
          </div>
        </span>
      </div>
      <div className="span2">
        <span className="bigboxm dyellow bigm">
          <div className="image">
            <img src={stethoscope} alt="" />
          </div>
          <div className="smallboxm lyellow smallm">
            <span className="text">546</span>
          </div>
        </span>
        <span className="bigboxm dblue bigm">
          <div className="image">
            <img src={stethoscope} alt="" />
          </div>
          <div className="smallboxm lblue smallm">
            <span className="text">546</span>
          </div>
        </span>
      </div>
    </div>
    /* <div className = "bigboxm" >
      <div  className="image">
        <img src={stethoscope} alt="" />
      </div>
      <div className = "smallboxm">
        320
      </div>
    </div>
  </div>
  <div>
  <div className = "bigboxm" >
    <div  className="image">
      <img src={stethoscope} alt="" />
    </div>
    <div className = "smallboxm">
      534
    </div>
  </div>
  <div className = "bigboxm" >
    <div  className="image">
      <img src={stethoscope} alt="" />
    </div>
    <div className = "smallboxm">
      312
    </div>
  </div>
</div>
</div> */
  );
};

export default MonthSummary;








