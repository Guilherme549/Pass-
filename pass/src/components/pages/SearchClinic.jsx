import React from 'react'
import Nav from '../layout/NavBar'
import DoctorsUL from '../userList/DoctorsUL';
import styles from "./SearchClinic.module.css"
import { GoAlertFill } from "react-icons/go";
import FormsSearch from '../projectForms/FormsSearch';


export default function SearchClinic() {
  return (
    <div className={styles.main_div}>
      <Nav />
      <div className={styles.search_clinic_div_main}>
        <div className={styles.search_clinic_div_display}>
          <FormsSearch/>
          <section className={styles.search_clinic_div_lembretes}>
            <h2>Lembretes</h2>
            <p><GoAlertFill color='yellow' /> Consulta com Ângela marques, dia 17 de agosto de 2024 as 13h</p>
            <p><GoAlertFill color='yellow'/> Consulta com Ângela marques, dia 17 de agosto de 2024 as 13h</p>
          </section>
        </div>
        <section>
          <p className={styles.results}>4 resultados encontrados para usa cidade</p>
          <DoctorsUL />
        </section>
      </div>
    </div>
  )
}
