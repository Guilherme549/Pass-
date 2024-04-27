import React from 'react'
import Input from '../form/Input'
import Nav from '../layout/NavBar'
import CheckBox from '../form/CheckBox'
import { PiChatCircleTextDuotone } from "react-icons/pi";
import { MdFaceUnlock } from "react-icons/md";
import { BsEar } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import DoctorsUL from '../../UserList/DoctorsUL';
import styles from "./SearchClinic.module.css"
import { GoAlertFill } from "react-icons/go";


export default function SearchClinic() {
  return (
    <div>
      <Nav />
      <div className={styles.search_clinic_div_main}>
        <div className={styles.search_clinic_div_display}>
          <div>
            <h2>Olá, Paciente</h2>
            <div className={styles.search_clinic_div_search}>
              <Input type='text' name='buscarCidade' placeholder='Busque pela cidade' />
              <Input type='text' name='atendimento' placeholder='Atendimento' />
              <Input type='text' name='tipoAtendimento' placeholder='Tipo de atendimento' />
              
            </div>
            <div className={styles.search_clinic_div_filter}>
              <CheckBox icon={<PiChatCircleTextDuotone />} name="Psicologo" id="Psicologo" value="Psicologo" />
              <CheckBox icon={<MdFaceUnlock />} name="Dermatologista" id="Dermatologista" value="Dermatologista" />
              <CheckBox icon={<BsEar />} name="Oftalmologista" id="Oftalmologista" value="Oftalmologista" />
              <CheckBox icon={<PiChatCircleTextDuotone />} name="Psicologo" id="Psicologo" value="Psicologo" />
              <CheckBox icon={<MdFaceUnlock />} name="Dermatologista" id="Dermatologista" value="Dermatologista" />
              <CheckBox icon={<BsEar />} name="Oftalmologista" id="Oftalmologista" value="Oftalmologista" />
              <CheckBox icon={<PiChatCircleTextDuotone />} name="Psicologo" id="Psicologo" value="Psicologo" />
              <CheckBox icon={<MdFaceUnlock />} name="Dermatologista" id="Dermatologista" value="Dermatologista" />
              <CheckBox icon={<BsEar />} name="Oftalmologista" id="Oftalmologista" value="Oftalmologista" />
              <CheckBox icon={<BsEar />} name="Oftalmologista" id="Oftalmologista" value="Oftalmologista" />
              <CheckBox icon={<BsEar />} name="Oftalmologista" id="Oftalmologista" value="Oftalmologista" />
            </div>
            <hr className={styles.divider} />
          </div>
          <section className={styles.search_clinic_div_lembretes}>
            <h2>Lembretes</h2>
            <p><GoAlertFill color='yellow' /> Consulta com Ângela marques, dia 17 de agosto de 2024 as 13h</p>
            <p><GoAlertFill color='yellow'/> Consulta com Ângela marques, dia 17 de agosto de 2024 as 13h</p>
          </section>
        </div>
        <section>
          <DoctorsUL />
        </section>
      </div>
    </div>
  )
}
