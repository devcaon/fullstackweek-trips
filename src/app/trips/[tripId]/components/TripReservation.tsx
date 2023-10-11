'use client'

import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import { Trip } from '@prisma/client'
import React from 'react'

interface TripReservationProps {
  trip: Trip
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-3 mb-3">
        <DatePicker placeholderText='Data inicial' className="w-full" onChange={() => { }} />
        <DatePicker placeholderText='Data final' className="w-full" onChange={() => { }} />
      </div>
      <Input placeholder={`Número de hóspedes (max: ${trip.maxGuests})`} />
      <div className="flex justify-between mt-3">
        <p className='font-medium text-sm text-primaryDark'>Total: </p>
        <p>R$2500</p>
      </div>
      <div className="pb-10 border-b border-b-primaryGray w-full">
        <Button className='mt-3 w-full'>Reservar agora</Button>
      </div>
    </div>
  )
}

export default TripReservation