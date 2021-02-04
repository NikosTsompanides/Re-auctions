import React from 'react'

export default function CardTitle({ title }) {
  return (
    <div className="font-semibold text-xl sm:text-base md:text-md lg:text-lg">
      {title}
    </div>
  )
}
