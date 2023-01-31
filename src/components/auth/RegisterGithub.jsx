import { AiFillGithub } from 'react-icons/ai';
import { supabase } from '../supabase';
import React, {useState, useEffect} from 'react';





const RegisterGithub = () => {



const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, [])

  async function checkUser() {   
  supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)
  setUser(session)
})
  }

  async function signInWithGithub() {
    const {error, session } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:5173/dashboard'
      }

    });
    console.log(session)
  }

  async function signOut() {
    await supabase.auth.signOut();
    
  }
 





  return (
    <div>
      {" "}
      <button className=" font-poppins flex items-center justify-center py-3 px-4 gap-4   bg-gray-500 w-full rounded-full  text-gray-100"
      onClick={signInWithGithub}>
        <AiFillGithub className="text-xl" />
        Ingresa con Github
      </button>
    </div>
  );
}

export default RegisterGithub