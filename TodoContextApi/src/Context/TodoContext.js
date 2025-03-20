import { createContext,useContext } from "react"; 

export const Todocontext=createContext({
    todos:[
        {
          id:1,
          todo:"todo msg",
          completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    delTodo:(id)=>{},
    toggleComplete:(todo)=>{}
});

export const useTodo=()=>{
    return useContext(Todocontext);
}

export const TodoProvider=Todocontext.Provider;

