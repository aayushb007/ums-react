import React, { useEffect, useState , useContext} from 'react';
import UserItem from './UserItem';
import AddUser from './AddUser';
import UserContext from '../../context/UserContext';
const Users = () => {
    const context = useContext(UserContext);
    const { users, getUser  } = context;
    const [newTask,setnewTask] = useState(users && users);
    const apiUrl = 'http://localhost:3005/users'
    // const [users, setusers] = useState([]);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        getUser();
        console.log('User:',users);
      }, [])
      const handleToggleDetails = () => {
        setFlag(!flag);
      }
  return (
    <>
    <div>Users</div>
    <div className="container">
        <div className="row">
          {users.map((task) => (
            <div className="col-md-4 my-2" key={task._id}>
                
              <UserItem  key={task.id} id={task.id} name={task.name} email={task.email} />
            </div>
          ))}
          <div className="col-ms-4 my-2">
            <button className='btn btn-light' onClick={handleToggleDetails}> ➕</button></div>
          {flag && (
            <AddUser  />
          )}
        </div>
      </div>
      </>
  )
}

export default Users