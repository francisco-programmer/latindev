import React, {useState} from "react";
import { AiOutlineGoogle, AiFillCloseCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {
    RiMailLine,
    RiLockLine,
    RiEyeLine,
    RiEyeOffLine,
  } from "react-icons/ri";
import {FormattedMessage} from 'react-intl';
;
import {signUpWithEmail, updateProfile, supabase} from '../supabase'
import MagicLink from "./MagicLink";

  

export default function Register() {

  
  const [showModal, setShowModal] = React.useState(false);


  

  return (
    <>
      <button
        className="bg-black text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg   mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Registrarme
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-gray-500 font-semibold font-poppins">
                    Registrarme{" "}
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

                    {/* formulario email y password */}
                   <MagicLink />
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}