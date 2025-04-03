import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function AddForm() {
    const dispatch = useDispatch();
    const [task, setTask] = useState(""); // Define task state first

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={task} onChange={(event) => setTask(event.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
}
