import React from 'react'
import Input from '../forms/Input'
import styles from "./FormsSearch.module.css"
import Button from "../forms/Button" ;
import styleInput from "../forms/Input.module.css"


export default function FormsSearch({ handleSubmit }) {

    return (
        <form onSubmit={handleSubmit}>
            <h2>Olá, Paciente</h2>
            <div className={styles.search_clinic_div_search}>
                <Input type='text' name='buscarCidade' placeholder='Busque pela cidade' required={true} />
                <select name="atendimento" id="atendimento" className={styleInput.search_select}>
                    <option value="" disabled selected>Especialidade do médico</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="clinico geral">Clínico Geral</option>
                    <option value="dermatologia">Dermatologia</option>
                    <option value="endocrinologia">Endocrinologia</option>
                    <option value="gastroenterologia">Gastroenterologia</option>
                    <option value="ginecologia">Ginecologia</option>
                    <option value="infectologia">Infectologia</option>
                    <option value="nefrologia">Nefrologia</option>
                    <option value="neurologia">Neurologia</option>
                    <option value="oftalmologia">Oftalmologia</option>
                    <option value="ortopedia">Ortopedia</option>
                    <option value="otorrinolaringologia">Otorrinolaringologia</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="pneumologia">Pneumologia</option>
                    <option value="psiquiatria">Psiquiatria</option>
                    <option value="reumatologia">Reumatologia</option>
                    <option value="urologia">Urologia</option>
                </select>
                <Input type='text' name='tipoAtendimento' placeholder='Tipo de atendimento' />
                <Button placeholder="Buscar" />
            </div>
            <hr className={styles.divider} />
        </form>
    )
}