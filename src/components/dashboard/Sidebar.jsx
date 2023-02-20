import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {IoBusinessSharp } from  "react-icons/io5";
import { IoMdHelpCircle } from  "react-icons/io";
import {BiLogOut } from  "react-icons/bi";
import {AiFillSetting } from  "react-icons/ai";
import {CgProfile } from  "react-icons/cg";
import {MdBusinessCenter, MdAddReaction } from  "react-icons/md";
import {RiCloseLine, RiMenu3Line } from  "react-icons/ri";
import Logo from '../logo/Logo';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <div  className={`xl:h-[100vh]  bg-sky-500 fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
      showMenu ? "left-0" : "-left-full"
    } transition-all`}
  >
      <header className=" flex flex-col items-center">
      
       
        <ul className="mt-10 flex flex-col gap-7">
          <li className="flex gap-3 hover:bg-sky-500">
            <MdAddReaction />
            <Link to="talent" className="font-poppins font-bolt">Talentos</Link>
          </li>
          <li className="flex gap-3">
            <IoBusinessSharp />
            <Link to="companies"className="font-poppins font-bolt">Empresas</Link>
          </li>
          <li className="flex gap-3">
            <MdBusinessCenter />
            <Link to="jobs" className="font-poppins font-bolt">Empleos</Link>
          </li>
          <li className="flex gap-3">
            <CgProfile />
            <Link to="profile" className="font-poppins font-bolt">Perfil</Link>
          </li>
          <li className="flex gap-3">
            <AiFillSetting />
            <Link to="setting" className="font-poppins font-bolt">Configuracion</Link>
          </li>
          <li className="flex gap-3">
            <IoMdHelpCircle />
            <Link to="help" className="font-poppins font-bolt">Ayuda</Link>
          </li>
        </ul>
      </header>
      <div className='p-6'>
        <li className="flex  bg-black w-full  items-center text-white gap-5  px-4 py-2 rounded-lg">
          <BiLogOut />
          <Link className="font-poppins font-bolt ">Salir</Link>
        </li>
      </div>
    </div>
    <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-sky-500 text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
}

export default Sidebar