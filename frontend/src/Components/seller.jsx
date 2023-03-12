import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './seller.css';
//import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";


function Seller () {
  const [descrp, setDescrp] = useState("");
  const [amt, setAmt] = useState("");
  const [date, setDate] = useState("");

  return(
    <div className="card">
    <div className="card-header">
      Person 1
    </div>
    <div className="card-body">
      <div>
        display card
      </div>
    </div>
    <div className="text-input">
              <i className="date-fill" />
              <input
                type="date"
                placeholder="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <i className="desc-fill" />
              <input
                type="text"
                placeholder="text"
                onChange={(e) => setDescrp(e.target.value)}
                value={descrp}
              />
              <i className="amt-fill" />
              <input
                type="amount"
                placeholder="amount"
                onChange={(e) => setAmt(e.target.value)}
                value={amt}
              />
    </div>
    <div className="card-footer">
      <button className="footbutton">Edit</button>
      <div className="foottotal">Total: </div>
      <div className="footvalue">1400</div>
    </div>
</div>
  );
};

export default Seller;






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <div className="card">
//     <div className="card-header">
//       Person 1
//     </div>
//     <div className="card-body">
//       <div>
//         display card
//       </div>
//     </div>
//     <div className="text-input">
//               <i className="date-fill" />
//               <input
//                 type="date"
//                 placeholder="date"
//                 //onChange={(e) => setEmail(e.target.value)}
//                 //value={email}
//               />
//               <i className="desc-fill" />
//               <input
//                 type="text"
//                 placeholder="text"
//                 //onChange={(e) => setEmail(e.target.value)}
//                 //value={email}
//               />
//               <i className="amt-fill" />
//               <input
//                 type="amount"
//                 placeholder="amount"
//                 //onChange={(e) => setEmail(e.target.value)}
//                 //value={email}
//               />
//     </div>
//     <div className="card-footer">
//       <button className="footbutton">Edit</button>
//       <div className="foottotal">Total: </div>
//       <div className="footvalue">1400</div>
//     </div>
// </div>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
