import React,{useState} from 'react'
import { RiMailLine } from "react-icons/ri";

const MagicLink = () => {
    const [email, setEmail] = useState('')

const handleSubmit = async (e) => {
    e.prevenDefault()


} 

  return (
    <div>
      <form className="flex flex-col gap-4 p-3 " onSubmit={handleSubmit}>
        <div className="relative">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-sky-500" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 pl-8 pr-4 bg-secondary-900 w-full  rounded-lg"
            name="emailr"
            placeholder="Correo electrónico"
          />
        </div>
        

        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg  mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Entrar
        </button>
        <p className='text-xs'>Por favor revisa tu bandeja de entrada te enviaremos <br></br>un email de confirmacion</p>
      </form>
    </div>
  );
}

export default MagicLink