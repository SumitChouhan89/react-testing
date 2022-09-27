import React from 'react'

type GreetProps = {
  name?: string
}

export const Greet = (props: GreetProps) => {
  return (
    <div className="div-class">Hello {props.name ? props.name : 'Guest'}</div>
  )
}
