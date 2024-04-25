import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logoPass+.png'
import styles from './NavBar.module.css'

export default function Nav() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <img src={logo} alt="Pass+" />Pass+
        <li>Explorar</li>
        <li>Minhas consultas</li>
      </ul>
    </nav>
  )
}
