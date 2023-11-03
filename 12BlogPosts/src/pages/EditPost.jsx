import React, { useState, useEffect } from 'react';
import { Container, PostForm } from '../components';
import postService from '../appwrite/posts';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const [post, setPosts] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() => {
        if(slug){
            postService.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        } else {    
            navigate("/")
        }   
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
           <Container>
                <PostForm post={post} />
           </Container>
        </div>
    ): null;
}

export default EditPost;
