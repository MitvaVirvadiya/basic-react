import React from 'react';
import { useSelector } from 'react-redux';
import { Logo, Container, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItem = [
        {
            name: "Home",
            slug: "/",
            isActive: true,
        },
        {
            name: "Login",
            slug: "/login",
            isActive: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            isActive: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            isActive: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            isActive: authStatus,
        },
    ]

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to="/">
                            <Logo width='70px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItem.map((item) => 
                        item.isActive ? (
                            <li key={item.name}>
                                <button onClick={() => navigate(item.slug)}
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                                    {item.name}
                                </button>
                            </li>
                        ) : null
                        )}
                        {authStatus && (
                            <LogoutBtn />
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
