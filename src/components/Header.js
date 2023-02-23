import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'
function Header({ toggleForm, showForm }) {
  return (
    <header className='header'>
        Taskman
        {showForm ? <Button color="red" text="Close" onClick={toggleForm}/>
        :
        <Button color="blue" text="Add" onClick={toggleForm}/>}
        

    </header>
  )
}

export default Header