import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const submitBtn = (e) => {
        e.preventDefault();
        setUser({username, password})
    }

    return (
        <div className='bg-gray-500 mt-16 p-4 rounded-xl shadow-lg w-full max-w-lg mx-auto'>
            <h2 className='my-2'>Login Form</h2>
            <input 
            className='py-1 px-2 m-2 rounded-lg bg-gray-200'
            type="text" 
            placeholder='Username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <input 
            className='py-1 px-2 m-2 rounded-lg bg-gray-200'
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button className='outline-none py-1 px-2 bg-blue-600 rounded-md m-2 text-white hover:bg-blue-700 transition-colors' onClick={submitBtn}>Submit</button>
        </div>
    );
}

export default Login;
