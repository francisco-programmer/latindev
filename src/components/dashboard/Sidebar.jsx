import React from 'react'
import { Link } from 'react-router-dom';
import {IoBusinessSharp } from  "react-icons/io5";
import { IoMdHelpCircle } from  "react-icons/io";
import {BiLogOut } from  "react-icons/bi";
import {AiFillSetting } from  "react-icons/ai";
import {CgProfile } from  "react-icons/cg";
import {MdBusinessCenter, MdAddReaction } from  "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-screen   py-5 flex flex-col  justify-between   ">
      <header className=" flex flex-col items-center">
        <h1 className="">
          <strong className=" bg-sky-500 p-2 rounded-md shadow-2xl font-poppins   ">
            Latin<strong className=" bg-black text-sky-500 p-2 rounded-md m-1">DEV</strong>
          </strong>
        </h1>
        <ul className="mt-10 flex flex-col gap-7">
          <li className="flex gap-3">
            <MdAddReaction />
            <Link className="font-poppins font-bolt">Talentos</Link>
          </li>
          <li className="flex gap-3">
            <IoBusinessSharp />
            <Link className="font-poppins font-bolt">Empresas</Link>
          </li>
          <li className="flex gap-3">
            <MdBusinessCenter />
            <Link className="font-poppins font-bolt">Empleos</Link>
          </li>
          <li className="flex gap-3">
            <CgProfile />
            <Link className="font-poppins font-bolt">Perfil</Link>
          </li>
          <li className="flex gap-3">
            <AiFillSetting />
            <Link className="font-poppins font-bolt">Configuracion</Link>
          </li>
          <li className="flex gap-3">
            <IoMdHelpCircle />
            <Link className="font-poppins font-bolt">Ayuda</Link>
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
  );
}

export default Sidebar