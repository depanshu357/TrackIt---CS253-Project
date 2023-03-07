import React from 'react'
import stethoscope from "../images/stethoscope.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Expenses () {
    const names=[{
        description: "f",
        name: "Hall 1 Canteen",
        type: "Food",
        Date: "May 6 2023",
        Money: "78"

    },
    {
        description: "ff",
        name: "Hall 1 Canteen",
        type: "Food",
        Date: "May 6 2023",
        Money: "78"

    },
    {
        description: "fff",
        name: "Hall 1 Canteen",
        type: "Food",
        Date: "May 6 2023",
        Money: "78"

    }


]
    const renderListOfUserNames = (names) => {
    
        return names.map(name => (
            <div style={{backgroundColor:"grey", paddingBottom: "3%", marginBottom:"10%"}}>
    
                    <img src={stethoscope} alt = "" style={{width: "10%",float:"left", paddingTop:"5%"}}/>
                    
                
                
                <span>{name.name}</span> &emsp;&emsp;&emsp;&emsp; <span>{name.Money}</span>
                
                <br/>
                <br/>
                <br/>
                <span>{name.Date}</span> &emsp;&emsp;&emsp;&emsp; <span>{name.type}</span>
                <p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    v
  </a>
  {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button> */}
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    {name.description}
  </div>
</div>
               
                
             
            </div>
            
        ))
  }
  return (
<div>
      <ul>
        {renderListOfUserNames(names)}
      </ul>
    </div>
  );
}

export default Expenses;