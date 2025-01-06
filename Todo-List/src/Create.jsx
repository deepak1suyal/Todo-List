import React, { useState } from 'react'
import axios from 'axios'
function Create() {
    const [task,setTask]=useState();
    axios.defaults.withCredentials = true;
    const A=()=>{
     axios.post('https://todo-list-1gdk.vercel.app/add',{task:task})
     .then(result=>console.log(result))
     .catch(err=>console.log(err))
    }
  return (
    <div>  
      <input type='text' name='' id='' onChange={(e)=>setTask(e.target.value)} className='bg-black outline-none p-3 w-80 bottom-1 rounded-lg  text-white '/>
      <button type='button' className='p-3 ml-1 bg-black text-white cursor-pointer rounded-lg' onClick={A} >Add</button>
    </div>
  )
}

export default Create;

