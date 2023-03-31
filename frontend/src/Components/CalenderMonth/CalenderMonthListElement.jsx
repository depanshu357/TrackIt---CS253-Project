import React from 'react'
import { useAuthContext } from "../../hooks/useAuthContext";
import { useExpenseContext } from "../../hooks/useExpenseContext";
const CalenderMonthListElement = ({name}) => {
    const { expense, dispatch } = useExpenseContext();
    const { user } = useAuthContext();
    const handleClick = async () => {
        console.log("delete clicked");
        if (!user) {
          return
        }
    
        const response = await fetch('/api/expense/' + name._id, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
    
        if (response.ok) {
          dispatch({ type: 'DELETE_EXPENSE', payload: json })
        }
      }
  return (
    <div className="hi">
        <div className="listelement">
          <div className="listdetails">
            <div className="content-upper">
              <div className="listname">{name.Item}</div>
              <div className="listmoney">₹{name.MoneySpent}</div>
            </div>
            <div className="content-lower">
              <div className="listdate">{name.Date.substring(0, 10)}</div>
              <div className="list-type">{name.Category}</div>
              <button className="delete-btn" onClick={handleClick} >delete</button>

              {/* <a
                className="btn btn-custom listcollapsebutton"
                data-bs-toggle="collapse"
                href={`#collapseExample${name._id}`}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <KeyboardArrowDownIcon />
              </a> */}
            </div>
            <div className=" listdesc"><span style={{ color: 'gray' }}>Description: </span>{name.Description}</div>

          </div>


        </div>
        {/* <div className="collapse listdescription" id={`collapseExample${name._id}`}>
          <div className=" listdesc">{name.Description}</div>
        </div> */}
      </div >
  )
}

export default CalenderMonthListElement
