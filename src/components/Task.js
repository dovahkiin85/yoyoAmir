import React from 'react'
import {FaTimes} from 'react-icons/fa'

function task({task, ondelete}) {
  return (
    <div className='task'>
    <h3>{task.title}
    <FaTimes style={{color:"red"}} onClick={() => ondelete(task.ida)}/>
    </h3>
    <p>{task.date}</p>
    </div>
  )
}

export default task