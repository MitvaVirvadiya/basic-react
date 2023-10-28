import { useEffect, useState } from 'react'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {

  return (
    <>
      <div className='w-full max-w-2xl bg-indigo-600 mx-auto my-4 px-4 py-6 rounded-lg shadow-lg flex flex-wrap justify-center items-center'>
        <TodoForm />
        <TodoList />
      </div>
    </>
  )
}

export default App
