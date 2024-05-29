import React from 'react'
import style from './Input.module.css'

export default function Input({ type, name, id, text, placeholder, value, required }) {
  return (
    <div className={style.search_btn}>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} value={value} {...(required && { required: true })} />
    </div>
  )
}
