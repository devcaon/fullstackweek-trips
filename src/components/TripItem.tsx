import { Trip } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'

interface TripItemProps {
  trip: Trip
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-[280px] h-[280px]">
        <Image src={trip.coverImage} fill alt={trip.name} className='rounded-lg shadow-md' style={{
          objectFit: 'cover'
        }} />
      </div>
      <h3 className='text-primaryDark font-medium text-sm mt-2'>{trip.name}</h3>
      <div className="flex item-center gap-2 my-1">
        <ReactCountryFlag countryCode={trip.countryCode} svg />
        <p className='text-xs text-primaryGray'>{trip.location}</p>
      </div>
      <p className='text-xs text-primaryGray'>
        <span className='text-primary font-medium'>R${trip.pricePerDay.toString()}</span> por dia
      </p>
    </div>
  )
}

export default TripItem