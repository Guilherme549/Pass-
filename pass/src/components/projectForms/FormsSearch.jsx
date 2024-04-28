import React from "react";
import { PiChatCircleTextDuotone } from "react-icons/pi";
import { MdFaceUnlock } from "react-icons/md";
import { BsEar } from "react-icons/bs";
import CheckBox from '../forms/CheckBox'
import Input from '../forms/Input'
import styles from "./FormsSearch.module.css"
import Button from "../forms/Button";

export default function FormsSearch() {
    return (
        <form>
            <h2>Olá, Paciente</h2>
            <div className={styles.search_clinic_div_search}>
                <Input type='text' name='buscarCidade' placeholder='Busque pela cidade' />
                <Input type='text' name='atendimento' placeholder='Atendimento' />
                <Input type='text' name='tipoAtendimento' placeholder='Tipo de atendimento' />
                <Button />
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
        </form>
    )
}