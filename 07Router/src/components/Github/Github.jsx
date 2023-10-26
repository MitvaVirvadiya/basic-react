import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()
    return (
        <div className='w-full max-w-lg bg-orange-400 text-gray-600 p-4 m-auto text-center my-2'>
            <h1 className='font-semibold text-3xl '>{data.login}</h1>
            <img src={data.avatar_url} alt="" className='my-3 m-auto rounded-lg' width={300}/>
            <div className='flex flex-wrap gap-5 flex-row justify-center font-medium text-lg'>
                <p>{data.public_repos} Repositories</p>
                <p>{data.followers} Followers</p>
                <p>{data.following} Followings</p>
            </div>
            <p className='my-4 font-semibold text-left text-2xl'>{data.name}</p>
            <p className='my-4 font-normal text-left'>Bio:  {data.bio}</p>
        </div>
    );
}

export default Github;

export const githubData = async() => {
    const response = await fetch('https://api.github.com/users/MitvaVirvadiya');
    return response.json();
}