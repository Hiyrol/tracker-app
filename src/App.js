import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './component/Header'
// import Tasks from './component/Tasks';
// import AddTask from './component/AddTask';
// import Footer from './component/Footer';
import { Header, Tasks, AddTask, Footer, About } from './component/index'



function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async ()=>{
      const res = await fetchTasks();
      setTasks(res);
    }
    getTasks();
  }, []);
  const fetchTasks = async ()=> {
    const res = await fetch ('http://localhost:5000/tasks')
    const data = res.json()
    return data
  }
  const fetchTask = async (id)=> {
    const res = await fetch (`http://localhost:5000/tasks/${id}`)
    const data = res.json()
    return data
  }
  const addTask = async (task) => {
    const res =await fetch ('http://localhost:5000/tasks', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    // console.log(task)
    // const id = Math.floor(Math.random() * 1000) + 1
    // const id = new Date().getTime();
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    const res = await fetch (`http://localhost:5000/tasks/${id}`,{
      method : 'DELETE'
    })
    // console.log(id);
    res.status === 200 ? setTasks(tasks.filter((task)=> task.id !== id)) : alert('error deleting task');
  }
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask (id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res =await fetch (`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })
    // console.log(id)
    const data = await res.json()
    // setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task))
  }




  const [showAddTask, setShowAddTask] = useState(false);
  const onAdd =() => setShowAddTask(!showAddTask)
  return (
      <Router>
            <div className="container">
                <Header showAdd= {showAddTask} onAdd={onAdd}/>
              <Routes>
                <Route path='/' element={
                  <>
                    { showAddTask && <AddTask onAdd={addTask} /> }
                    {tasks.length >=1 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task To Show'  }
                  </>
                }/>
                <Route path='/about' element={<About />}/>
              </Routes>
              <Footer />
            </div>
      </Router>
  ); 
}

export default App;
