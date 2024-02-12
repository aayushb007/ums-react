import React, { useEffect, useState , useContext} from 'react'
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import TaskContext from '../../context/TaskContext';
const Tasks = () => {
  const context = useContext(TaskContext);
  const { tasks, getTask  } = context;
  const [newTask,setnewTask] = useState(tasks && tasks);
  const apiUrl = 'http://localhost:3005/tasks'
  const [flag, setFlag] = useState(false);
 
  useEffect(() => {
    getTask();
  }, [])
  const editTasks = (taskId, updatedTaskData) => {
    console.log('Function called', taskId, updatedTaskData);
    fetch(`${apiUrl}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTaskData)
    }).then((response) => {

    }).catch((err) => {
      console.log(err);
    })
  }
  const handleToggleDetails = () => {
    setFlag(!flag);
  }

  let closedCount = 0;
  let pendingCount = 0;
  let openCount = 0;
if (tasks.length > 0) {
  tasks.map((task) => {
    console.log('THis is ',task.task);
    if (task.status === 'Complete') {
      closedCount++;
    } else if (task.status === 'Pending') {
      pendingCount++;
    }
  });
}
  return (
    <>
      <div className='container '>
        <div className='row'>
          <div className="col-md-3 my-2" > <div className="card bg-dark text-light text-center"><div className='card-title mx-3 my-4 '><h5>Total Task <br></br>
            {tasks.length} </h5></div></div></div>
          <div className="col-md-3 my-2" > <div className="card bg-dark text-light text-center"><div className='card-title mx-3 my-4'><h5>Completed Tasks <br></br>
            {closedCount}</h5></div></div></div>
          <div className="col-md-3 my-2" > <div className="card bg-dark text-light text-center"><div className='card-title mx-3 my-4'><h5>Open Tasks <br></br>
            {openCount}</h5></div></div></div>
          <div className="col-md-3 my-2" > <div className="card bg-dark text-light text-center"><div className='card-title mx-3 my-4 '><h5>Pending Tasks<br></br>
            {pendingCount}</h5></div></div></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {tasks.map((task) => (
            <div className="col-md-4 my-2" key={task._id}>
              <TaskItem  key={task.id} id={task.id} title={task.title} desc={task.description} due_date={task.dueDate} status={task.status} onTaskEdit={editTasks}  />
            </div>
          ))}
          <div className="col-ms-4 my-2">
            <button className='btn btn-light' onClick={handleToggleDetails}> ➕</button></div>
          {flag && (
            <AddTask  />
          )}
        </div>
      </div>
    </>
  )
}

export default Tasks