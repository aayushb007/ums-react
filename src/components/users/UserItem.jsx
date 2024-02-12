import React, { useState, useRef, useContext } from 'react'
import UserContext from '../../context/UserContext';

const UserItem = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    const context = useContext(UserContext);
    const { deleteUser } = context;
    const ref = useRef(null)
    const closeref = useRef(null)
    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
      };
    const handleClick = (e) => {
    //    props.onTaskEdit(editedTask.id, editedTask);
        ref.current.click();
    
      }
  return (
   <>
     <div className="card"  onClick={handleToggleDetails} >
          <div className="card-body bg-dark text-light" >
          <p className="card-text">Name: {props.name}</p>
           <p className="card-text">Email: {props.email}</p>   
     </div>
     {showDetails && (
              <>
              <div className="row m-3">
            <div className="col-sm">
            <button className='btn btn-sm btn-dark mx-2' onClick={handleClick} >Edit</button>
            </div> 
            <div className="col-sm">
      <button className='btn btn-sm btn-primary' onClick={()=> { deleteUser(props.id)}}>Delete</button>
    </div>
              </div>
     </>
            )}
    </div>
   </>
  )
}

export default UserItem