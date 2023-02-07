import React from 'react'
import Nav from '../components/Nav'
import Presentation from '../components/Presentation'

const Landing = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url('https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  bg-cover bg-center ">
        <div className="w-full h-screen  flex-col justify-center items-center p-5  drop-shadow-2xl">
          <Nav />

          <Presentation />
        </div>
      </div>
    </div>
  );
}

export default Landing