import React from 'react'
import CardJobs from './filterJobs/CardJobs'
import FilterJobsCountry from './filterJobs/FilterJobsCountry'

const Jobs = () => {
  return (
    <div className='p-4 h-[100vh] overflow-y-scroll flex flex-col  gap-4'>
      <div>

      <FilterJobsCountry />
      
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-4 '>
      <CardJobs />
      </div>
    </div>
  );
}

export default Jobs