import React, { Children, useContext, useState } from "react";
import { PiChatCircleTextDuotone } from "react-icons/pi";
import { MdFaceUnlock } from "react-icons/md";
import { BsEar } from "react-icons/bs";
import CheckBox from '../forms/CheckBox'
import Input from '../forms/Input'
import styles from "./FormsSearch.module.css"
import Button from "../forms/Button";
import { FilterGetContextDoctors } from '../../context/FiltertGetContextDoctors';

export default function FormsSearch({ handleSubmit }) {
    const doctors = useContext(FilterGetContextDoctors);

    const [filter, setFilter] = useState("");

    

    return (
        <form onSubmit={handleSubmit}>
            <h2>Olá, Paciente</h2>
            <div className={styles.search_clinic_div_search}>
                <Input type='text' name='buscarCidade' placeholder='Busque pela cidade' />
                <Input type='text' name='atendimento' placeholder='Especialidade do médico' />
                <Input type='text' name='tipoAtendimento' placeholder='Tipo de atendimento' />
                <Button placeholder="Buscar" />
            </div>
            <div className={styles.search_clinic_div_filter}>
                <CheckBox icon={<PiChatCircleTextDuotone />} name="Psicologo" id="Psicologo" value="Psicologo" />
                <CheckBox icon={<MdFaceUnlock />} name="Dermatologista" id="Dermatologista" value="Dermatologista" />
                <CheckBox icon={<BsEar />} name="Oftalmologista" id="Oftalmologista" value="Oftalmologista" />

            </div>
            <hr className={styles.divider} />
        </form>
    )
}