import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder}: task))
  }
  const [tasks, setTasks] = useState(
    [{
      id: 1,
      title: "wash the dishes",
      date: 'January 1st, 2024',
      reminder: true
      },
      {
      id: 2,
      title: "mow the lawn",
      date: 'January 2st, 2024',
      reminder: false
      },
      {
      id: 3,
      title: "do your homework",
      date: 'January 3st, 2024',
      reminder: false
      }]
  );
  return (
    <div className="container">
      <Header/>
      <AddTask/>
      {tasks.length !== 0 ? <Tasks tasks={tasks} ondelete={deleteTask} onToggle={toggleTask}/> : "No tasks my respected gentlemen"}
    </div>
  )
}

export default App;
