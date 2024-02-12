import {useState} from 'react';
import UserContext from './UserContext';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addUserAsync, deleteUserAsync } from '../redux/userSlice';
function UserState(props) {
  const dispatch = useDispatch();
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

    const apiUrl = 'http://localhost:3005/users'
    const taskInitial = [

    ]
    const addUser = async (task) =>{
        const sanitizedTask = JSON.parse(JSON.stringify(task).replace(/'/g, '"'));
        dispatch(addUserAsync(sanitizedTask)).then((d) => {
        console.log(d);
        getUser()
        notifySuccess(<div>User Created Successfully</div>);
        })
        .catch((error) => {
          console.error(error);
          notifyError('Error adding user');
        });

    }
    const getUser = async () =>{
      try {
        const res = await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTcwNzM5NTI5OCwiZXhwIjoxNzA3Mzk4ODk4fQ.rRwAUWmlFtHW-uJLR9mFM7WjCrv1Tl2n6r41Uu2FU40'
          },
         
      });
      const data = await res.json();
      console.log(data.users);
      setUsers(data.users);
      } catch (error) {
        notifyError('Error fetching users');
      }
        
    }
    const deleteUser = async (id) =>{
      dispatch(deleteUserAsync(id)).then((d) => {
        console.log(d);
        getUser()
        notifySuccess('User Deleted successfully!');

      })
  
    }
    const editUser = async () =>{
        
    }
    const [users, setUsers] = useState(taskInitial);
   return (
    <UserContext.Provider value={{ users,addUser,deleteUser,getUser,editUser}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState;