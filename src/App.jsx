import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/form'
import TodoItem from './components/todoList'

function App() {
  const [todos , setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=> [ {...todo , id: Date.now()} , ...prev])
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>(prev.filter((todo)=> todo.id!==id) ))
  }

  const toggleTodo = (id)=>{
    setTodos((prev)=> prev.map((todo)=> todo.id===id ? {...todo , completed: !todo.completed}: todo))
  } 

  const updateTodo = (id , todo)=>{
    setTodos((prev)=> prev.map((prevtodo)=> prevtodo.id===id ? todo : prevtodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
  } , [])

  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])

  return (
    <>
    <TodoProvider value={{todos , addTodo , toggleTodo , updateTodo , deleteTodo}}>
      <div className="bg-zinc-600 min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        
                          {
                            todos.map((todo)=> (
                            <div key={todo.id}
                            className='w-full'
                            >
                              <TodoItem todo={todo} />
                            </div>
                            ))
                          }
                        
                    </div>
                </div>
            </div>
    </TodoProvider>
    </>
  )
}

export default App
