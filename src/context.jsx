import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
        id:1,
        todomessage : "message",
        completed : false
        }
        
    ],
    addTodo: (id , todo)=>{},
    deleteTodo: (id)=>{},
    toggleTodo: (id)=>{},
    updateTodo: (id , todo)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)

}
export const TodoProvider = TodoContext.Provider