import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react';

const Github = () => {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/MitvaVirvadiya')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }, [])

    return (
        <div className='text-center m-4 bg-orange-600 text-gray-600 p-4 text-3xl'>
            <h1>Github Followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="github profile" width={300} />
        </div>
    );
}

export default Github;

// export const githubLoad = async () => {
//     const response = await fetch('https://api.github.com/users/MitvaVirvadiya')
//     return response.json()
// } 