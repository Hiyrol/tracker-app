import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2021</p>
        {/* <a href="/about">About</a> */}
        <Link to= '/about'>About</Link>
    </footer>
    
  )
}

export default Footer