'use client'
import CLink from '@/components/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

export default function page() {
  const [signInData, setSignInData] = useState({
      email: '',
      password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setSignInData((prevData) => ({
        ...prevData,
        [name]: value, // Dynamically update the correct field
      }));
    };
    
  return (
    <div>
      <p className='text-2xl'>Sign In</p>
      <form action="" className='text-end'>
        <Input name= 'email' type='email' placeholder='Email' value={signInData.email} onChange={handleInputChange} required/>
        <Input name= 'password' type='password' placeholder='Password' value={signInData.password} onChange={handleInputChange} required/>
        <CLink href='forgot-password' hyperText='Recover Password?'/>
        <Button className='w-full rounded-xl py-5'>Create Account</Button>
      </form>
    </div>
  )
}
