import React from 'react'

export default function CardDescription({ children }) {
  return (
    <div className="text-gray-400 font-medium text-sm sm:text-base md:text-md pt-1 py-2">
      {children}
    </div>
  )
}
