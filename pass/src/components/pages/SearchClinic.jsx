import Nav from '../layout/NavBar'
import DoctorsUL from '../userList/DoctorsUL';
import styles from "./SearchClinic.module.css"
import { GoAlertFill } from "react-icons/go";
import FormsSearch from '../projectForms/FormsSearch';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FilterGetContextDoctors } from '../../context/FiltertGetContextDoctors';

export default function SearchClinic() {



  const [doctors, setDoctors] = useState([]);
  const [doctorType, setdoctorType] = useState(null);

  const doctorComEnderecoProcurado = doctors.find(doctor => doctor.address === doctorType);
  console.log(doctorComEnderecoProcurado)
  useEffect(() => {
    const fetchAxiosGet = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/todo/lista/?format=json`);

        
          setDoctors(response.data);
          // console.log( typeof response.data

      } catch (error) {
        console.log(error); 
      }
    };
    fetchAxiosGet();


  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      buscarCidade: e.target.buscarCidade.value,
      atendimento: e.target.atendimento.value,
      tipoAtendimento: e.target.tipoAtendimento.value
    };

    console.log(info, "MInha info");
    try {
      const response = await axios.post('http://127.0.0.1:8000/todo/doctors-filter/', { doctorType: info });

    } catch (error) {
      console.error('Erro ao filtrar médicos:', error);
    }

  }

  return (
    <FilterGetContextDoctors.Provider value={doctors} >
      <div className={styles.main_div}>
        <Nav />
        <div className={styles.search_clinic_div_main}>
          <div className={styles.search_clinic_div_display}>

            <FormsSearch handleSubmit={handleSubmit} />
            <section className={styles.search_clinic_div_lembretes}>
              <h2>Lembretes</h2>
              <p><GoAlertFill color='yellow' /> Consulta com Ângela marques, dia 17 de agosto de 2024 as 13h</p>
              <p><GoAlertFill color='yellow' /> Consulta com Ângela marques, dia 17 de agosto de 2024 as 13h</p>
            </section>
          </div>
          <section>
            <p className={styles.results}>4 resultados encontrados para usa cidade</p>
            <DoctorsUL />
          </section>
        </div>
      </div>

    </FilterGetContextDoctors.Provider>

  )
}
