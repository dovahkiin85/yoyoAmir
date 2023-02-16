import {React} from 'react'
import { useState } from "react"
function AddTask() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState('')
  return (
    <form className='add-control'>
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
            <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.value)}></input>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask