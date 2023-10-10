import TripItem from '@/components/TripItem'
import { prisma } from '@/lib/prisma'
import { Trip } from '@prisma/client'
import React from 'react'

const getTrips = async () => {
  const trips = await prisma.trip.findMany({})
  return trips
}

const RecommendedTrips = async () => {
  const data = await getTrips()
  return (
    <div className='container mx-auto p-5'>
      <div className="flex items-center justify-center gap-5">
        <div className="w-full h-[1px] bg-primaryLight"></div>
        <h2 className='font-medium text-primaryGray whitespace-nowrap'>Destinos Recomendados</h2>
        <div className="w-full h-[1px] bg-primaryLight"></div>
      </div>
      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
}

export default RecommendedTrips