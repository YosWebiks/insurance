import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='full' style={{display:'flex', flexDirection:"column"}}>
        <NavLink to={'/claims'} className='nav-it'>Claims</NavLink>
        <NavLink to={'/policies'} className='nav-it'>Policies</NavLink>
    </div>
  )
}
