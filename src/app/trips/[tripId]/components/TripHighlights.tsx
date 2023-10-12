import Image from 'next/image'
import React from 'react'
import AiOutlineCheckCircle from 'react-icons/ai'


interface TripHighlightsProps {
  highlights: string[]
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className='flex flex-col p-5'>
      <h2 className='font-semibold text-primaryDark mb-3'>Destaques</h2>
      <div className="flex flex-wrap gap-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center gap-1 w-[50%]">
            <Image src="/check-icon.png" width={15} height={15} alt={highlight} />
            <p className='text-primaryGray text-xs'>{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TripHighlights