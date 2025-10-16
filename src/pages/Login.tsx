import React, { useState } from 'react'
import InputField from '../components/InputField'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/api/auth/login",{
                email,
                password,
            });
            const token = res.data.token;
            localStorage.setItem("token", token);
            console.log(token);
            alert("Login success");
            
        } catch (error) {
            alert("Login failed");
            console.log(error);
            
        }
    };


  return (
    <div className='flex justify-center items-center h-screen bg-gray-500'>
        <form className='bg-white w-1/2 h-3/4 p-4 flex flex-col gap-2 rounded-2xl'>
            <h1 className='text-4xl font-bold text-center mb-4'>Login</h1>

            <InputField type='email' placeholder='email' label='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField type='text' placeholder='password' label='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button
            type='submit'
            className='w-full h-10 rounded-xl bg-blue-600 cursor-pointer'
            onClick={handleLogin}
            >
                Login
            </button>
            <a className='cursor-pointer' type='submit' onClick={() => navigate("/signup")}>create account</a>
        </form>
    </div>
  )
}

export default Login