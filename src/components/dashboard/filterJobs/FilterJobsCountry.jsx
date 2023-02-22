import React from 'react'

const FilterJobsCountry = () => {
  return (
    <div>
      <h1 className="font-poppins text-xl">Encuentra Empleos </h1>
      <div className="flex-wrap flex">
        <div className="flex flex-col sm:flex-row  gap-2 items-center justify-center">      
        <h1 className="text-lg">Filtrar por:</h1>    
          <div className="flex   gap-2">       
          <label>Posicion</label>
          <input
            type="text"
            className="rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 
      disabled:bg-slate-50 disabled:text-slate-500 border-[1px]  text-gray-500 disabled:border-sky-200 disabled:shadow-none
      border-sky-500 g-pink-600"
            placeholder="Frontend"
          />
            </div>
            <div className="flex   gap-2">
          <label>Ubicación</label>
          <input
            type="text"
            className="rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 
      disabled:bg-slate-50 disabled:text-slate-500 border-[1px]  text-gray-500 disabled:border-sky-200 disabled:shadow-none
      border-sky-500 g-pink-600"
            placeholder="Remote"
          />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default FilterJobsCountry