import React from 'react'
import {GoLocation} from 'react-icons/go'

const CardCompany = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg">
      <div className="flex gap-2 ">
        <div className="">
          <div className="w-16 h-16">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-full w-16 h-16"
            />
          </div>
        </div>
        <div>
          <p className="font-poppins font-bold flex flex-grow">
            Microsoft corporations
          </p>

          <p className="flex items-center  text-gray-500 text-sm">
            <GoLocation />
            Colombia
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardCompany