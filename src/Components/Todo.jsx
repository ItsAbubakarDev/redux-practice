import { useSelector } from "react-redux"; 
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
export default function Todo() { 
    const todos = useSelector((state) => state.todos); 
    const dispatch = useDispatch();
    const clickHandler = (id) =>{
    
        dispatch(deleteTodo(id))
    }
    
    return ( 
        <div> 
            <AddForm></AddForm> 
            
            <h2>Todo App</h2> 
            <ul> 
                {todos.map((todo) => (  
                    <li key={todo.id}>{todo.task}
                    <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                    </li> 
                ))} 
            </ul> 
        </div> 
    ); 
} 
