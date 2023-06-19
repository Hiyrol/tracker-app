import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation, Link } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  return (
    <header className="header">
        <Link to={'/'}>
          <h1>{title}</h1>
        </Link> 
        
        {location.pathname ==='/' &&  (<Button color={showAdd ?'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd}/>)}
        {/* {<button className="btn">Seyi</button>} */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

