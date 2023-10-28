import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../features/todo/todoSlice';

const TodoForm = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const editTodoHandler = (e) => {
        e.preventDefault()
        dispatch(editTodo(todos.id))
    } 

    return (
        <>
        <div className='text-3xl mt-6 font-semibold w-full max-w-lg mx-auto text-center'>
            Todo's list
            <ul className="list-none">
                {todos.map((todo) => (
                    <li 
                    key={todo.id}
                    className="mt-4 flex justify-between items-center bg-gray-700 px-4 py-2 rounded"
                    >
                        <div className='text-white'>{todo.text}</div>    
                        <button
                        onClick={() => dispatch(editTodo(todo.id))}
                        className="text-white bg-green-500 border-0 py-1 px-4 m-1 focus:outline-none hover:bg-green-600 rounded text-md"
                        >
                        ✏️
                        </button>          
                        <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className="text-white bg-yellow-500 border-0 py-1 px-4 m-1 focus:outline-none hover:bg-yellow-600 rounded text-md"
                        >
                        ❌
                        </button>          
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default TodoForm;
