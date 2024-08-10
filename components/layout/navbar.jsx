import React from "react";
import Link from "next/link";
export default function Navbar() {
   return (
      <div style={{gap: '10px', display: 'flex'}}>
         <Link href="/">Home</Link>
         <Link href="/articles">Articles</Link>
         <Link href="/profile">Profile</Link>
      </div>
   )
}