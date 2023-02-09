import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'
function Header() {
  return (
    <header className='header'>
        Taskman
        <Button color="blue" text="Add"/> 
        

    </header>
  )
}

export default Header