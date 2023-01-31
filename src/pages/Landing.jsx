import React from 'react'
import Nav from '../components/Nav'
import Presentation from '../components/Presentation'

const Landing = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url('https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
        <div className="w-full h-full  flex-col justify-center items-center backdrop-blur-lg p-5">
          <Nav />

          <Presentation />
        </div>
      </div>
    </div>
  );
}

export default Landing