import React from 'react'

export default function CardActions({ children }) {
  return (
    <div className="flex flex-row flex-wrap w-full items-center">
      {children}
    </div>
  )
}
