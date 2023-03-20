import React from 'react';
import stethoscope from "../images/stethoscope.png";
import "./dailySummary.css";


function DailySummary() {
  
  return (
    <>
    <div>
    <div class = "bigbox" >
  <div>
  <img src={stethoscope} alt="" />

    </div>
    <div class = "smallbox">
      
          546
      
    </div>
</div>
    <div class = "bigbox" >
        <div>
        <img src={stethoscope} alt="" />
          </div>
          <div class = "smallbox">
            
                320
            
          </div>
          </div>
  </div>
  <div>
    <div class = "bigbox" >
  <div>
  <img src={stethoscope} alt="" />
    </div>
    <div class = "smallbox">
      
         534
      
    </div>
    </div>
    <div class = "bigbox" >
        <div>
        <img src={stethoscope} alt="" />
          </div>
          <div class = "smallbox">
            
                312
            
          </div>
          </div>
  </div>
  </>
  );
}

export default DailySummary


