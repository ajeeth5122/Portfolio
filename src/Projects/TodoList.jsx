import React, { useRef, useState } from 'react'
import '../Projects/todo.css'

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
    <div className='todos'>
        {todo.map((todos)=>
        <div className='task' key={todos.id}>
          <h1>{todos.text}</h1>
          {todos.mins <= 9 ? <p>Time:{todos.hour}:0{todos.min}</p> : <p>Time:{todos.hour}:{todos.min}</p> }
          <div className='todo-btn'>
          <button>complete</button>
          <button>delete</button>
          </div>
        </div> )}
        </div>
    </>
  )
}

export default TodoList