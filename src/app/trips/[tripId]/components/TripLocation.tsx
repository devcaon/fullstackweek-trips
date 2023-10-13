import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

interface TripLocationProps {
  location: string
  locationDescription: string
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className='font-semibold text-primaryDark mb-5'>Localização</h2>
      <div className="relative w-full h-[280px]">
        <Image src='/map-mobile.png' fill alt={location} style={{
          objectFit: 'cover'
        }} className='rounded-lg shadow-md'/>
      </div>
      <h3 className='text-primaryDark text-sm font-semibold mt-3'>{location}</h3>
      <p className='text-xs text-primaryDark mt-2 leading-5'>{locationDescription}</p>
      <Button className='mt-5' variant='outlined'>Ver no Google Maps</Button>
    </div>
  )
}

export default TripLocation