import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 const navigate = useNavigate(); // <-- Navigation hook
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/login', { email, password });
            localStorage.setItem('token', data.token);
            alert('Login successful');
             navigate('/protected'); // <-- Navigate on successful login
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>email: user@example.com,
    password: 'password123',</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;
