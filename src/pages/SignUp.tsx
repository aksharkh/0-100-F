import React, { useState } from 'react'
import InputField from '../components/InputField';
import axios from 'axios';


const SignUp: React.FC = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("USER");
    const [password, setPassword] = useState("");


    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/api/auth/signup",{
                userName,
                email,
                role,
                password,
            }
            );
            alert("signup done");
            console.log(res);
            
            
        } catch (error) {
            alert("signup failed");
            console.log(error);;
            
        }
        
    }


  return (
    <div className='flex justify-center items-center h-screen bg-gray-500'>
        <form className='bg-white w-1/2 h-3/4 p-4 flex flex-col gap-2'>
            <h2 className='text-4xl font-bold text-center mb-4'>Sign Up</h2>

            <InputField placeholder='username' label='Username' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <InputField placeholder='email' label='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField placeholder='USER' label='Role' type='text' value={role} onChange={(e) => setRole(e.target.value)} />
            <InputField placeholder='password' label='password' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type='submit' className='w-full h-10 rounded-xl bg-blue-600 cursor-pointer' onClick={handleSignup}>
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default SignUp