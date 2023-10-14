'use client'

import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {differenceInDays} from 'date-fns'

interface TripReservationProps {
  tripStartDate: Date,
  tripEndDate: Date,
  maxGuests: number,
  pricePerDay: number
}

interface TripReservationForm {
  guests: number,
  startDate: Date | null
  endDate: Date | null
}

const TripReservation = ({ tripStartDate, tripEndDate, maxGuests, pricePerDay }: TripReservationProps) => {

  const { register, handleSubmit, formState: { errors }, control, watch } = useForm<TripReservationForm>()

  const onSubmit = (data: any) => {
    console.log({ data })
  }

  const startDate = watch("startDate")
  const endDate = watch("endDate")

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-3 mb-3">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: 'Data inicial obrigatória'
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText='Data inicial'
              className="w-full"
              minDate={tripStartDate}
            />
          )}
        />
        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: 'Data final obrigatória'
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText='Data final'
              className="w-full"
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
            />
          )}
        />
      </div>
      <Input
        {...register('guests', {
          required: {
            value: true,
            message: 'Número de hóspedes é obrigatório'
          }
        })}
        placeholder={`Número de hóspedes (max: ${maxGuests})`}
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />
      <div className="flex justify-between mt-3">
        <p className='font-medium text-sm text-primaryDark'>Total: </p>
        <p className='font-medium text-sm text-primaryDark'>
          {startDate && endDate ? 
            `R$ ${differenceInDays(endDate, startDate) * pricePerDay }` ?? 1
           : 'R$0'}
        </p>
        
      </div>
      <div className="pb-10 border-b border-b-primaryGray w-full">
        <Button onClick={() => handleSubmit(onSubmit)()} className='mt-3 w-full'>Reservar agora</Button>
      </div>
    </div>
  )
}

export default TripReservation