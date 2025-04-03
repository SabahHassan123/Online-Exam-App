'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

export default function page() {
    const [newPassword, setNewPassword] = useState({
        password: '',
        confirmPassword: ''
    });

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewPassword((prevData) => ({
            ...prevData,
            [name]: value, 
        }));
    }
    
    return (
        <div>
            <p className='text-2xl'>Set New Password</p>
            <form action="" className='text-end'>
                <Input name= 'password' type='password' placeholder='Password' value={newPassword.password} onChange={handlePasswordChange} required/>
                <Input name="confirmPassword" type="password" placeholder="Confirm Password" value={newPassword.confirmPassword} onChange={handlePasswordChange} required />
                <Button className='w-full rounded-xl py-5'>Set Password</Button>
            </form>
        </div>
    )
}