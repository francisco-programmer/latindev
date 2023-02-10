import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <Sidebar />
      </div>
      <div className='bg-gray-100 col-span-10'>
      <Outlet />
      </div>


    </div>
  )
}

export default Dashboard