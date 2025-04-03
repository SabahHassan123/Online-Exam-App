'use client'
import CLink from '@/components/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {
  const [vCode, setVCode] = useState('');

    const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setVCode(event.target.value);
    };
    
  return (
    <section>
      <p className='text-2xl'>Verify Code</p>
      <form action="" className='text-end'>
        <Input name= 'code' type='number' placeholder='Enter Code' value={vCode} onChange={handleCodeChange} />
        <p className='font-light'>Didn't receive a code?
          <CLink href='signin' hyperText=' Resend' boldText='font-medium'/>
        </p>
        <Button className='w-full rounded-xl py-5'>
            <CLink href='set-new-password' hyperText='Verify'/>
        </Button>
      </form>
    </section>
  )
}
