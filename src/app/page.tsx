"use client";

import Headers from "@/components/Headers";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data : session} = useSession();
  return (
    <>
      <Headers />
      <main className=" w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl m-5">This is the Home Page</h1>
        <p>username: {session?.user?.name}</p>
        <br />
        <p>email: {session?.user?.email}</p>
        <button onClick={() => signOut()}>Log Out</button>
      </main>
    </>
  );
}
