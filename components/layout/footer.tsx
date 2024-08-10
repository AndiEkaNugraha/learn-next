import React from "react";
import Link from "next/link";
export default function Footer() {
   return (
      <div>
         <Link prefetch={false} href="/profile/get-in-touch">Get In Touch</Link>
      </div>
   )
}