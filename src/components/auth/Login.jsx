import React, {useState} from "react";
import { AiOutlineGoogle, AiFillCloseCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {
    RiMailLine,
    RiLockLine,
    RiEyeLine,
    RiEyeOffLine,
  } from "react-icons/ri";
  

export default function Login() {
    

const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-sky-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Entrar
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-gray-500 font-semibold font-poppins">
                    Iniciar sesión{" "}
                  </h3>
                  <button
                    className="p-1 ml-auto text-gray-500 border-0   float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <AiFillCloseCircle />
                  </button>
                </div>
                {/*body*/}
                <div className="relative  p-5 flex-auto">
                  {/* ingresa con google */}
                  <div className="flex flex-col gap-3">
                    <button className=" font-poppins flex items-center justify-center py-3 px-4 gap-4 bg-red-500 w-full rounded-full text-gray-100">
                      <AiOutlineGoogle className="text-xl" />
                      Ingresa con google
                    </button>
                    <button className=" font-poppins flex items-center justify-center py-3 px-4 gap-4 bg-sky-500 w-full rounded-full  text-gray-100">
                      <AiFillLinkedin className="text-xl" />
                      Ingresa con LinkedIn
                    </button>
                    <button className=" font-poppins flex items-center justify-center py-3 px-4 gap-4   bg-gray-500 w-full rounded-full  text-gray-100">
                      <AiFillGithub className="text-xl" />
                      Ingresa con Github
                    </button>

                    <div className="flex flex-col gap-4 p-3 ">
                    <div className="relative">
                      <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-sky-500" />
                      <input
                        type="email"
                        className="py-2 pl-8 pr-4 bg-secondary-900 w-full  rounded-lg"
                        placeholder="Correo electrónico"
                      />
                    </div>
                    <div className="relative ">
                      <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-sky-500" />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="py-3 px-8 bg-secondary-900 w-full  rounded-lg" outline
                        placeholder="Contraseña"
                      />
                      {showPassword ? (
                        <RiEyeOffLine
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute top-1/2 -translate-y-1/2  right-2 hover:cursor-pointer text-sky-500"
                        />
                      ) : (
                        <RiEyeLine
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer  text-sky-500"
                        />
                      )}
                    </div>
                    </div> 
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Entrar
                    </button>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}