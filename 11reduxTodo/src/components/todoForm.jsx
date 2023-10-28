import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice';

const TodoList = () => {
    const [input, setInput] = useState('')
    const [edit, setEdit] = useState(false)
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    const updateTodoHandler = (e) => {
        e.preventDefault()
        dispatch(updateTodo(input))
        setInput('')
        setEdit(false)
    }
    
    useEffect(() => {
        todos.map(todo => {
            if(todo.isEditable == true){
                setEdit(true)
                setInput(todo.text)
                console.log(todo.id);
            }
        })
    }, [todos])

    return (
        <form onSubmit={edit ? updateTodoHandler : addTodoHandler} className="space-x-3 mt-12 ">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-600 rounded text-lg"
            >
                {edit ? "Update" : "Add"} Todo
            </button>
        </form>
    );
}

export default TodoList;
