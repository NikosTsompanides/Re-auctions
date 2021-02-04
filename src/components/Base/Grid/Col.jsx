import React from 'react'

export default function Col({ cols, sm, md, lg, xl, gap, align, fullHeight, children }) {
  const smWidth = sm || cols
  const mdWidth = md || smWidth
  const lgWidth = lg || mdWidth
  const xlWidth = xl || lgWidth

  const alignment = align? `content-${align}` : ''
  return (
    <div className={`flex flex-col ${fullHeight? 'h-full': 'h-auto'} w-${cols} sm:w-${smWidth} md:w-${mdWidth} lg:w-${lgWidth} xl:w-${xlWidth} ${gap? `px-${gap}`: ''} ${alignment}`}>
      {children}
    </div>
  )
}
