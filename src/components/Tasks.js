import React from 'react'
import Task from './Task'
function Tasks({tasks, ondelete}) {
  return (
    <div>
        {tasks.map((task) =>  <h3 key={task.id}><Task task={task} ondelete={ondelete}/></h3>)}
    </div>
  )
}

export default Tasks