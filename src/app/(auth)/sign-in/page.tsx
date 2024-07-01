"use client"
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import {useRouter} from 'next/navigation';
export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    try{
      const res = await signIn("credentials",{
        email,
        password,
        redirect: false,
      });
      if(res?.error){
        alert("Invalid credentials");
        return
      }
      router.replace("/")
    } catch (error) {
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
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
              Sign In
            </button>
          </div>
          <div className="text-sm text-gray-600">
            New user?  <Link href="/sign-up">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
