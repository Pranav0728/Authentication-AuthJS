"use client"
import { useState } from 'react';

import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] =useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = async(e:any) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/users',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        })
      })
      if(res.ok){
        alert("Success");
        router.replace('/sign-in')
      }
      const data = await res.json();
      alert(data.message)

    } catch (error) {
      return new NextResponse(JSON.stringify(error));
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"

              onChange={(e)=>setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="blocktext-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
