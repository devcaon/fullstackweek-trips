import Image from 'next/image'
import React from 'react'

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">

      <div className="flex items-center justify-center gap-5">
        <div className="w-full h-[1px] bg-primaryLight"></div>
        <h2 className='font-medium text-primaryGray whitespace-nowrap'>Tente pesquisar por</h2>
        <div className="w-full h-[1px] bg-primaryLight"></div>
      </div>

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col justify-center items-center gap-1">
          <Image width={35} height={35} src="/hotel-icon.png" alt="hotel" />
          <p className="text-sm text-primaryGray">Hotel</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Image width={35} height={35} src="/farm-icon.png" alt="fazenda" />
          <p className="text-sm text-primaryGray">Fazenda</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Image width={35} height={35} src="/cottage-icon.png" alt="chale" />
          <p className="text-sm text-primaryGray">Chalé</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Image width={35} height={35} src="/inn-icon.png" alt="hotel" />
          <p className="text-sm text-primaryGray">Pousada</p>
        </div>
      </div>

    </div>
  )
}

export default QuickSearch