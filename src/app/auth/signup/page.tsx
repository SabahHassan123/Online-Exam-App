'use client'
import InputField from '@/components/input-field'
import CLink from '@/components/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'

export default function Register() {
  
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '' 
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the correct field
    }));
  };

  return (
    <div>
      <p className='text-2xl'>Sign up</p>
      <form action="" className='text-center'>
        <Input name= 'firstName' type='text' placeholder='First Name' value={signupData.firstName} onChange={handleInputChange} required/>
        <Input name= 'lastName' type='text' placeholder='Last Name' value={signupData.lastName} onChange={handleInputChange} required/>
        <Input name= 'email' type='email' placeholder='Email' value={signupData.email} onChange={handleInputChange} required/>
        <Input name= 'password' type='password' placeholder='Password' value={signupData.password} onChange={handleInputChange} required/>
        <Input name="confirmPassword" type="password" placeholder="Confirm Password" value={signupData.confirmPassword} onChange={handleInputChange} required />
        <p className='font-light'>Already have an account? 
          <CLink href='signin' hyperText=' Login' boldText='font-medium'/>
        </p>
        <Button className='w-full rounded-xl py-5'>Create Account</Button>
      </form>

    </div>
  )
}
