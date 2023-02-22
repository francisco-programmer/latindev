import React from 'react'

const FilterTalentCountry = () => {
  return (
    <div className=''>
      <h1 className="font-poppins text-xl">Encuentra Talento </h1>
      <div className="sm:flex   gap-2">
        <h1 className="text-lg">Filtrar por:</h1>
        <label>Ubicación</label>
        <input
          type="text"
          className="rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 
      disabled:bg-slate-50 disabled:text-slate-500 border-[1px]  text-gray-500 disabled:border-sky-200 disabled:shadow-none
      border-sky-500 g-pink-600 "
          placeholder="Ej: Colombia"
        />
      </div>
    </div>
  );
}

export default FilterTalentCountry