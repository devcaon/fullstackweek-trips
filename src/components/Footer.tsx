import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col p-5 justify-center items-center bg-waterWhite gap-2">
      <div className="relative h-[23px] w-[133px]">
        <Image src='/logo.png' alt='Full Stack Week' fill />
      </div>
      <p className='text-sm font-medium text-primaryDark'>Todos os direitos reservados</p>
    </div>
  )
}

export default Footer