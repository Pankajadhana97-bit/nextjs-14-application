"use client";

import { useParams, useRouter } from "next/navigation";
import { Lora } from "next/font/google";
import React, { useState } from "react";
import Link from "next/link";

export default function Profilepage() {
  const router = useRouter();

  const [loading,setLoading] = useState<boolean>(false);

  // async actions of the network calls 
  setTimeout(()=>{
    setLoading(true)
  },2000)

    const content = (<div>
      <h1>Profile Page</h1>

      <Link href={'/'}> Home</Link>
      <button 
      onClick={() => router.back()}
      >
        Back
      </button>
      <ul>
        <li> <Link href='/profile/1'> Profile 1</Link></li>
        <li> <Link href='/profile/2'> Profile 2</Link></li>
        <li> <Link href='/profile/3'> Profile 3</Link></li>  
      </ul>
    </div>
  );

  const content2 = (
   <>
   switch
   </>
  )

  return (loading) ? content  : content2;
}
