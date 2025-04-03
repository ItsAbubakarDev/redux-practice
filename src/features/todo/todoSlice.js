import {createSlice,nanoid} from "@reduxjs/toolkit";
let initialState = {
    todos:[{ id:123,
        task:"Code",
        completed:false},]
   
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers :{
        addTodo:(state,action)=>{
            const newTodo = {
                id : nanoid(),
                task :action.payload,
                isDone:false
            }
            state.todos.push(newTodo)
        },

        deleteTodo:(state,action)=>{
            //id will be in action.payload
            state.todos = state.todos.filter((todo)=>todo.id!=action.payload)
        },
        
        markAsDone : (state,action)=>{
            //id will be in action.payload
            state.todos = state.todos.map((todos)=>{
                if(todos.id===action.payload){
                    todos.isDone = true;
            }})

        }
    }
})
export default todoSlice.reducer
export const{addTodo,deleteTodo,markAsDone} = todoSlice.actions;