import React from 'react'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const Navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
        Navigate('/login');
    }
  return (
    <div>
        <h1>Welcome to the Home Dear {user && user.email}!</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home