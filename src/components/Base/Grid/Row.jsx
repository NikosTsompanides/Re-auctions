import React from 'react'

export default function Row({ children, justify, fullHeight }) {
  return (
    <div className={`flex flex-row flex-wrap w-full ${fullHeight? 'h-full': 'h-auto'} ${justify? `justify-${justify}`: ''}`}>
      {children}
    </div>
  )
}
