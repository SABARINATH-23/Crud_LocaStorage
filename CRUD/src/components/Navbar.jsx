import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <NavLink to="/">Home</NavLink>    
        <NavLink to="/create">Create</NavLink>
    </>
  )
}

export default Navbar