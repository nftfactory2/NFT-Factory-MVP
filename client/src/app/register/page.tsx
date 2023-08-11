'use client';

import MetaDescription from '@/components/MetaDescription';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    router.push('/dashboard', { scroll: false });
  };

  return (
    <>
      <MetaDescription title='Register' />
      <div className='flex justify-center items-center'>
        <div>
          <h2 className='text-center text-primary font-orbitron'>Register</h2>
          <form onSubmit={handleSubmit}>
            <label>Brand name:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='name'
              type='text'
              placeholder='Enter Brand name'
              value={formData.name}
              onChange={handleFieldChange}
            />

            <label>Email Address:</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='email'
              type='email'
              placeholder='Enter Email address'
              value={formData.email}
              onChange={handleFieldChange}
            />

            <button type='submit' className='bg-gradient-linear w-full p-5'>
              Connect Wallet
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
