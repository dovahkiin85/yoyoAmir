import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
  const deleteTask = (id) => {
    console.log('it works my nigga')
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
      <Tasks tasks={tasks} ondelete={deleteTask}/>
    </div>
  )
}

export default App;
