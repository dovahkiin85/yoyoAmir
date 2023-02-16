import React from 'react'
import {FaTimes} from 'react-icons/fa'

function task({task, ondelete, onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={(id) => onToggle(task.id)}>
    <h3>{task.title}
    <FaTimes style={{color:"red"}} onClick={() => ondelete(task.id)}/>
    </h3>
    <p>{task.date}</p>
    </div>
  )
}

export default task