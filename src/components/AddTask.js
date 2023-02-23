import {React} from 'react'
import { useState } from "react"
function AddTask({ addATask }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)
    const onAdd = (e) => {
        e.preventDefault()
        if(!title){
            alert('no title')
        }else{
            const newTask = {title, date, reminder}
            addATask(newTask)
            setTitle('')
            setDate('')
            setReminder(false)
        }
    }
  return (
    <form className='add-control' onSubmit={onAdd}>
        <div className='form-control'>
            <label>Title</label>
            <input type="text" placeholder="Add Title..." value={title} onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Date</label>
            <input type="text" placeholder="Add Date..."value={date} onChange={(e) => setDate(e.target.value)} ></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask