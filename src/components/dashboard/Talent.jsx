import React from 'react'
import FilterBackend from './filterTalent/FilterBackend'
import FilterCybersecurity from './filterTalent/FilterCybersecurity'
import FilterFrontend from './filterTalent/FilterFrontend'
import FilterFullstack from './filterTalent/FilterFullstack'
import FilterProjectManager from './filterTalent/FilterProjectManager'
import FilterSoftware from './filterTalent/FilterSoftware'
import FilterUiUx from './filterTalent/FilterUiUx'
import FilterIA from './filterTalent/FilterIA'
import FilterDevops from './filterTalent/FilterDevops'
import FilterDataScientist from './filterTalent/FilterDataScientist'
import CardTalent from './filterTalent/CardTalent'
import FilterTalentCountry from './filterTalent/FilterTalentCountry'
const Talent = () => {
  return (
    <div className="p-4 h-[100vh] overflow-y-scroll">
      <div className="flex items-center gap-2 my-2">
        
        <FilterTalentCountry />
      </div>
      <header className="flex gap-2 mb-2 flex-wrap ">
        <FilterFrontend />
        <FilterBackend />
        <FilterFullstack />
        <FilterProjectManager />
        <FilterSoftware />
        <FilterUiUx />
        <FilterCybersecurity />
        <FilterIA />
        <FilterDevops />
        <FilterDataScientist />
      </header>
      <hr className="my-4"></hr>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1  gap-4 ">
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
        <CardTalent />
      </div>
    </div>
  );
}

export default Talent