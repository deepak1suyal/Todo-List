import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';

function Home() {

  const [updatedtask,setupTask]=useState();  
  axios.defaults.withCredentials = true;
  const up=(id)=>{
   axios.put('https://todo-list-1gdk.vercel.app/update/'+id,{updatedtask:updatedtask})
   .then(result=>console.log(result))
   .catch(err=>console.log(err))
  }
    const [todo,setTodo]=useState([]);
    useEffect(()=>{
     axios.get('https://todo-list-1gdk.vercel.app/get')
     .then(result=>setTodo(result.data))
     .catch(err=>console.log(err))
    },[todo])
const Edit=(id)=>{
  axios.put('https://todo-list-1gdk.vercel.app/update/'+id)
  .then(result=>console.log(result))
  .catch(err=>console.log(err))
}
const del=(id)=>{
  axios.delete('https://todo-list-1gdk.vercel.app/delete/'+id)
  .then(result=>{
    location.reload()
  })
  .catch(err=>console.log(err))
}
  return (
    <div className='flex flex-col items-center '>
<h1 className='font-medium text-3xl p-7'>Todo List</h1>
<Create/> 
{   todo.length===0 ? 
<div><h1 className='font-medium text-2xl p-3'>No Record</h1></div>
:
    todo.map(todo=>(<div className='p-2 bg-black text-white m-2 w-96 rounded-lg flex cursor-pointer'>{todo.task}<input  onChange={(e)=>setupTask(e.target.value)} className='text-black w-40 ml-auto' type=''  />
    <span className = ' ml-auto w-8 flex m-1 ' >
    <img onClick={()=>up(todo._id )} className="m-2" src="https://cdn-icons-png.flaticon.com/512/12376/12376279.png" alt="" />
    <img className=" " onClick={()=>del(todo._id)} src="https://static.vecteezy.com/system/resources/previews/000/630/479/original/vector-trash-can-icon-symbol-illustration.jpg" alt="" /></span></div>))
} 
    </div>
  )
}

export default Home;


