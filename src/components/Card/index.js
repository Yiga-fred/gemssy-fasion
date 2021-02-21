// @ flow
import React from 'react'
import './card.scss'

type Props = {
  children: React.ReactNode,
  className: string
}
 const Card = ({children, className=''}: Props) => {
  return (
    <div className={`c-card ${className}`}>
      {children}
    </div>
  )
}

export default Card