import React from 'react'
import { useDuesContext } from '../hooks/useDuesContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const DuesDetailsForCustomer = (props) => {
    const {dispatch} = useDuesContext();
    const {user} = useAuthContext();

    const handleClick = async () => {
        if (!user) {
          return
        }
    
        const response = await fetch('/api/dues/' + props.due._id, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
    
        if (response.ok) {
          dispatch({type: 'DELETE_DUES', payload: json})
        }
      }

  return (
    <div>
      Item - {props.due.Item} <br></br>
                Amount - {props.due.Amount} <br></br>
                RollNo - {props.due.RollNo} <br></br>
                Description - {props.due.Description} <br />
                shopName - {props.due.shopName} <br />
      <span className="material-symbols-outlined" onClick={handleClick} style={{cursor:"pointer"}}>delete</span>

    </div>
  )
}

export default DuesDetailsForCustomer
