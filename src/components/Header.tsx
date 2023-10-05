'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const { status, data } = useSession()

  const handleLoginClick = () => signIn()
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)
  const handleLogoutClick = () => {
    setMenuIsOpen(false)
    signOut()
  }

  return <div className="container mx-auto p-5 py-0 h-[93px] flex items-center justify-between">

    <div className="relative h-[32px] w-[182px]">
      <Image src='/logo.png' alt='Full Stack Week' fill />
    </div>

    {status === 'unauthenticated' && (
      <button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>
        Login
      </button>
    )}
    {status === 'authenticated' && data.user && (
      <div className="relative flex items-center gap-3 border-2 border-solid border-primaryGray px-4 py-2 rounded-full">
        <AiOutlineMenu size={18} onClick={handleMenuClick} className='cursor-pointer hover:text-primaryGray' />
        <Image className='rounded-full shadow-md' width={35} height={35} alt={data.user.name!} src={data.user.image!} />
        {menuIsOpen && (
          <div className='absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center'>
            <button className='text-primary text-sm font-semibold hover:text-primaryGray' onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
        )}
      </div>
    )}

  </div>
}

export default Header