import React from 'react'

export default function Input({type, name}) {
  return (
    <div>
        <label htmlFor={name}>{text}</label>
        <input type={type} name={name} />
    </div>
  )
}
