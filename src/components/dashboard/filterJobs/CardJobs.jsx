import {GoLocation} from 'react-icons/go'

import {GiOfficeChair} from 'react-icons/gi'
const CardJobs  = () => {
    return (
      <div className="bg-white p-2 rounded-lg shadow-lg text-sm">
        <div className="gap-2 ">
          <div>
            {/* nombre empresa */}
            <p className="font-poppins font-bold flex flex-grow text-[19px]">
              Microsoft corporations
            </p>

            {/* posicion  */}
            <div className='flex justify-between'>

            <p className="underline text-sky-500 font-bold font-poppins">Frontend Developer</p>
            <button className='bg-black text-white flex items-center px-1 rounded-lg'> <GiOfficeChair />Remoto</button>
            </div>
            <div className='flex gap-2 '>
              <p className='font-semibold font-poppins'>Habilidades: </p>
              <p className='font-poppins text-sm'>React, Html, css, tailwind</p>
            </div>
            <div className="flex gap-2">
              <p className='font-poppins font-semibold '>Ingles: </p>
              <p className='font-poppins'>Avanzado</p>
            </div>
            <div className="flex gap-2 font-poppins">
              <p className='font-poppins font-semibold '>Seniority:</p>
              <p className='font-poppins'>Junior</p>
            </div>

            <div className="flex gap-2">
              <p className='font-poppins font-semibold '>
                Prioridad: <p></p>
              </p>
              <button className="bg-red-500 text-white px-1 rounded-lg text-xs font-poppins">
                urgente
              </button>
            </div>
            {/* sede pais */}
            <div className="flex justify-between">
              <p className="flex items-center  text-gray-500 text-sm font-poppins">
                <GoLocation />
                Colombia
              </p>
              <p className="text-sm hover:underline hover:cursor-pointer">Ver mas...</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default CardJobs