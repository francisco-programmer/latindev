import React from 'react'
import { supabase } from '../supabase';

const Dashboard = () => {

  async function signOut() {
    const {error} = await supabase.auth.signOut();
    console.log(error)
  }
  return (
    <div>Dashboard
      <button onClick={signOut}>salir</button>
    </div>
  )
}

export default Dashboard