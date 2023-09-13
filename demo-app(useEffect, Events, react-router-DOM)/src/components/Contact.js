import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <Link to={'insta'}><h4>Contact via Instagram</h4></Link>
        <Link to={'mail'}><h4>Contact via Mail</h4></Link>
        <Outlet />
    </>
  )
}

export default Contact