import { useState, useEffect } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import About from './components/About';
function App() {
  const fetchTasks = async () => {
    const res = await fetch('http://127.0.0.1:5000/tasks')
    const data = await res.json()
    return data
  }
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
      console.log(taskFromServer)

    }
    const getTask = async(id) => {
      const taskFromServer = await fetchTask(id)
      console.log(taskFromServer)
    }
    getTasks()
    getTask(0)
  }, [])
  const fetchTask = async(id) => {
    const res = await fetch(`http://127.0.0.1:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  const deleteTask = async (id) => {
    await fetch(`http://127.0.0.01:5000/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter((task) => task.id !== id))

  }

  const toggleTask = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}
    const res = await fetch(`http://127.0.0.1:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()
    setTasks(tasks.map(task => task.id === id? {...task, reminder:data.reminder}: task))

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder}: task))
  }
  const addATask = async (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = {...task, id}
    setTasks([...tasks, newTask])
    const res = await fetch(`http://127.0.0.1:5000/tasks/`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }
  const toggleForm = () => {
    setShowForm(!showForm)
  }
  const [tasks, setTasks] = useState(
    []
  );
  const [showForm, setShowForm] = useState(true)
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
      <Route path='/' element={<>
      <Header toggleForm={toggleForm} showForm={showForm}/>
      {showForm && <AddTask addATask = {addATask} />}
      {tasks.length !== 0 ? <Tasks tasks={tasks} ondelete={deleteTask} onToggle={toggleTask}/> : "No tasks my respected gentlemen"}</>}>
      </Route>
      <Route path='/about' element={<>
      <About />
      </>}></Route>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}


export default App;
