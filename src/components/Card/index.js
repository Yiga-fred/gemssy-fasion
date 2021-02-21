// @ flow
import React from 'react'


type Props = {
  children: React.ReactNode,
  className: string
}
 const Card = ({children, className}: Props) => {
  return (
    <div className={`c-card ${className}`}>
      {children}
    </div>
  )
}

export default Card