'use client'
import CLink from '@/components/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

export default function page() {
  const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    
  return (
    <section>
      <p className='text-2xl'>Forgot Your Password?</p>
      {/* <form action="" className='text-end'> */}
        <Input name= 'email' type='email' placeholder='Enter Email' value={email} onChange={handleEmailChange} />
        {/* <p className='font-light'>Didn't receive a code?
          <CLink href='signin' hyperText=' Resend' boldText='font-medium'/>
        </p> */}
        <Button className='w-full rounded-xl py-5' type='submit'>
            <CLink href='verify-code' hyperText='Send'/>
        </Button>
      {/* </form> */}
    </section>
  )
}
