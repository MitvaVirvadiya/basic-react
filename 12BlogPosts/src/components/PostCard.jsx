import React from 'react';
import authService from '../appwrite/files'

const PostCard = ($id, title, featuredImage) => {
    return (
        <link to={`/post/${$id}`} >
            <div className='w-full bg-gray-100 rounded-xl p-4'> 
                <div className='w-full justify-center mb-4'>
                    <img src={authService.getFilePreview(featuredImage)} alt={title} 
                    className='rounded-xl'/>
                </div>
                <h2>{title}</h2>
            </div>
        </link>
    );
}

export default PostCard;
