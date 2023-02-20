import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../logo/Logo'

const Content = () => {
  return (
    <div className='flex flex-col'>

        <div className=''>

        <Logo />
        </div>
        <Outlet />
    </div>
  )
}

export default Content