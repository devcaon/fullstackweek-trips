import React from 'react'

interface TripDescriptionProps {
  description: string
}

const TripDescription = ({description} : TripDescriptionProps) => {
  return (
    <div className='flex flex-col p-5'>
      <h2 className='font-semibold text-primaryDark'>Sobre a Viagem</h2>
      <p className='text-xs leading-5 text-primaryDark mt-1'>{description}</p>
    </div>
  )
}

export default TripDescription