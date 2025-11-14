import React, { useRef, useState } from 'react'
import '../Projects/todo.css'
import Header from '../Component/Header';

function TodoList() {
    const [todo,setTodo]=useState([]);
    const inputRef=useRef();
    const date= new Date()
    const time=date.getHours();
    const mins= date.getMinutes();


    const HandleAdd=(e)=>{
        const text=inputRef.current.value.trim();

        if (text === '')return alert ("add Something")
       const newtodo={
        id: Date.now(),
        text: text,
        complete: false,
        min: mins,
        hour: time
       }
       setTodo((prev)=>[...prev,newtodo]);
       inputRef.current.value="";
       

    }
    console.log(todo)
  return (
    <>
   
    <div className='Todo' >
        <div className='lists' >
            <div className='listTitle'>
                <i className="bi bi-list-task"></i>
                <h1>Todo List</h1>
            </div>
           
           <div className='inputbutton'>
            <input type="text" ref={inputRef} placeholder='Enter your Task' />
            <i onClick={HandleAdd} className="bi bi-patch-plus"></i>
           </div>
        </div>
        
    </div>
    </>
  )
}

export default TodoList