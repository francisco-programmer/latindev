import React from 'react'
import Content from '../components/dashboard/Content'
import Sidebar from '../components/dashboard/Sidebar'


const Dashboard = () => {
  return (
    <div className='grid xl:grid-cols-12 grid-cols-1 sm:h-screen  '>
      <div className='col-span-2'>
        <Sidebar />
      </div>
      <div className='bg-gray-100 col-span-10 h-screen overflow-y-auto'>
        <Content />
      </div>  


    </div>
  )
}

export default Dashboard