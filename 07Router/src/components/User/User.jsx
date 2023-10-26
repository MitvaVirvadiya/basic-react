import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const {userId} = useParams()
    return (
        <div>
            <h1 className='text-center text-3xl bg-orange-600 text-gray-600 p-4'>User: {userId}</h1>
        </div>
    );
}

export default User;
