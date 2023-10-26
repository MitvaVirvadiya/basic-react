import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const {userId} = useParams()
    return (
        <h1 className='bg-orange-600 text-gray-600 text-3xl p-4 text-center font-bold'>User: {userId}</h1>
    );
}

export default User;
