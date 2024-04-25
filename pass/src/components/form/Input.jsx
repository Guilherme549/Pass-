import React from 'react'
import style from './Input.module.css'

export default function Input({type, name, id, text, placeholder, value}) {
  return (
    <div className={style.search_btn}>
        <label htmlFor={name}>{text}</label>
        <input type={type} name={name} id={id} placeholder={placeholder} value={value} />
    </div>
  )
}
