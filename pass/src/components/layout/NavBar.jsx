import React from 'react'
import logo from '../../img/logoPass+.png'
import styles from './NavBar.module.css'

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><img src={logo} alt="Pass+" /></li>
        <li>Pass+</li>
        <li>Explorar</li>
        <li>Minhas consultas</li>
      </ul>
    </nav>
  )
}
