import React from 'react'
import {GoLocation} from 'react-icons/go'

const CardTalent = () => {
  return (
    <div className='bg-white p-2 rounded-lg shadow-lg overflow-y-auto'>
      <div>
        <div className='flex gap-2 '>
          <div className=''>

        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         className="rounded-full w-16 h-16" />
         <p className='text-xs text-center leading-3  text-gray-500'>English</p>
         <p className='text-xs text-center  text-gray-600 font-bold'>Advance</p>
         </div> 
        <div>
          <p className='font-poppins font-bold'>Francisco Palencia</p>
          <p className='text-sky-500'>Frontend Developer</p>
          <p className='text-gray-500 flex text-sm'>Experiencia: <p className='text-gray-500 font-semibold'>3 años</p></p>
          <p className='flex items-center  text-gray-500 text-sm'><GoLocation/>Colombia</p>

        </div>

        </div>

      </div>
    </div>
  );
}

export default CardTalent