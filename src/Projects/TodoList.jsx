import React, { useRef, useState } from 'react'
import '../Projects/todo.css'
import { Navigate, useNavigate } from 'react-router-dom';

function TodoList() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);
  const inputRef = useRef();
  const date = new Date()
  const time = date.getHours();
  const mins = date.getMinutes();


  const HandleAdd = (e) => {
    const text = inputRef.current.value.trim();

    if (text === '') return alert("add Something")
    const newtodo = {
      id: Date.now(),
      text: text,
      complete: false,
      min: mins,
      hour: time
    }
    setTodo((prev) => [...prev, newtodo]);
    inputRef.current.value = "";
  }
  const HandleDelete = (id) => {
    setTodo(todo.filter((task) => task.id !== id))

  }
  const HandleComplete = (id) => {
    setTodo(todo.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task,

    ))

  }

  console.log(todo)
  return (
    <>
      <i onClick={(e) => navigate("/")} className=" home bi bi-house-fill">Home</i>

      <div className='Todo' >
        <div className='listTitle'>
          <i className="bi bi-list-task"></i>
          <h1>Todo List</h1>
        </div>
        <div className='lists' >


          <div className='inputbutton'>
            <input type="text" ref={inputRef} placeholder='Enter your Task' />
            <i onClick={HandleAdd} className="bi bi-patch-plus"></i>
          </div>
        </div>


        <div className='todos'>
          {todo.map((todos) =>
            <div className={todos.complete ? 'complete' : 'task'} key={todos.id}>
              <h1>{todos.text}</h1>
              {todos.mins <= 9 ? <p>Time:{todos.hour}:0{todos.min}</p> : <p>Time:{todos.hour}:{todos.min}</p>}
              <div className='todo-btn'>
                {todos.complete ? <button onClick={() => HandleDelete(todos.id)} className='comp'>Clear</button> :
                  <div className='todo-btn'>
                    <button onClick={() => HandleComplete(todos.id)} className='comp'>Complete</button>
                    <button onClick={() => HandleDelete(todos.id)} className='del'>Delete</button>
                  </div>
                }
              </div>
            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default TodoList