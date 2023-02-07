import React from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
import { FormattedMessage } from 'react-intl'

const Presentation = () => {
  return (
    <div className="mt-20">
      <div className='flex flex-col gap-5  '>
        <h1 className="sm:text-5xl text-3xl text-center font-bold text-white font-poppins ">
          <FormattedMessage id="presentacion"
          defaultMessage="La Mejor Red de empleabilidad del sector IT" />
        </h1>
        <h2  className="sm:text-2xl text-xl text-center font-bold text-white font-poppins ">Buscas empleo o talento Vamos al Grano!</h2>
        
        <div className="flex gap-5 justify-center">
          <Login />
          <Register />
        </div>
      </div>
     
    </div>
  );
}

export default Presentation