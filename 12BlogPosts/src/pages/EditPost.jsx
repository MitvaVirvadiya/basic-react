import React, { useState, useEffect } from 'react';
import { Container, PostForm } from '../components';
import postService from '../appwrite/posts';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const [posts, setPosts] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() => {
        if(slug){
            postService.getPost(slug).then((posts) => {
                if(posts){
                    setPosts(posts)
                }
            })
        } else {    
            navigate("/")
        }
    }, [slug, navigate])

    return posts ? (
        <div className='py-8'>
           <Container>
                <PostForm posts={posts} />
           </Container>
        </div>
    ): null;
}

export default EditPost;
