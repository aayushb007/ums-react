import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/users/Users';
import Tasks from './components/tasks/Tasks';
import Features from './components/features/Features';
import Navbar from './components/Navbar';
import TaskState from './context/TaskState';
import UserState from './context/UserState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <UserState>
      <TaskState>
      <BrowserRouter>
      <ToastContainer />
      <Navbar/>
       <Routes>
        <Route path='/' element={<Users/>} />
        <Route path='/task' element={<Tasks/>} />
        <Route path='/feature' element={<Features/>} />
       </Routes>
      </BrowserRouter>
      </TaskState>
      </UserState>
    </div>
  );
}

export default App;
