'use client'

import React, { useEffect } from 'react'

export default function Page() {
   console.log('this is console log')
   useEffect(() => {
      alert('this is alert')
   },[])
   return <h1>Hello, Next.js</h1>
}