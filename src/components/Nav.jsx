import React, {useContext} from 'react'
import { langContext } from './context/LanguageContext'

const Nav = () => {
  const language = useContext(langContext)
  return (
    <div className="flex justify-between">
      <header className="">
        <h1 className="">
          <strong className=" bg-sky-500 p-2 rounded-md shadow-2xl font-poppins   ">
            Latin<strong className=" bg-black text-sky-500 p-2 rounded-md m-1">DEV</strong>
          </strong>
        </h1>
      </header>
      <div>
        <select className="appearance-none  font-poppins border border-white drop-shadow-2xl text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 bg-transparent dark:border-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-sky-500">
          <option onClick={() => language.establecerLenguaje("en-US")}>
            EN
          </option>
          <option onClick={() => language.establecerLenguaje("es-MX")}>
            ES
          </option>
        </select>
      </div>
    </div>
  );
}

export default Nav