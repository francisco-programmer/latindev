import React from 'react'
import CardCompany from './filterCompanies/CardCompany'
import FilterCompanyCountry from './filterCompanies/FilterCompanyCountry'

const Companies = () => {
  return (
    <div className='p-4 h-[100vh] overflow-y-scroll'>
      <FilterCompanyCountry />
       <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1  gap-4 mt-4">  

      <CardCompany />
      <CardCompany />
      <CardCompany />
       </div>
      

    </div>
  )
}

export default Companies