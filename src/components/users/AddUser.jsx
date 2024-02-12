import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
const AddUser = () => {
    const context = useContext(UserContext);
    const {addUser,getUser} = context;
    const [task, setTasks] = useState({ name: "", email: "", password: "", addressId: 1 });
    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setTasks((prevTask) => ({ ...prevTask, [name]: value }));
       
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log(task);
        addUser(task);

    }
  return (
   <>
    <div className='container bg-dark text-light p-3'>
            <h1>Create User</h1>

            <form >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={onChange} id="name" aria-describedby="emailHelp" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Id</label>
                    <input type="text" className="form-control" onChange={onChange} id="email" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" onChange={onChange} id="password" name='password' />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
   </>
  )
}

export default AddUser