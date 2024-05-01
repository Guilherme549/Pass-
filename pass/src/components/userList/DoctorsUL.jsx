import React, { useEffect, useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import styles from './DoctorsUL.module.css';
import Button from "../forms/Button";
// Remove unused import statements
// import antonio from '../../img/image.png'
// import { useEffect, useState } from 'react';


// essas li serão dinamicas

export default function DoctorsUL() {
    const caminhoImagem = "http://127.0.0.1:8000/"
    const [doctors, setDoctors] = useState([]);

    // Quando o componente é montado ou quando a variável doctors é alterada, a função de callback "fectchApi" passada para o useEffect é executada.
    useEffect(() => {
        const fetchApi = async () => {
            const url = 'http://127.0.0.1:8000/todo/lista/?format=json'
            const response = await fetch(url);
            
            // tansformando os dados em json
            const objJson = await response.json();
            // console.log(objJson[0].name);
            setDoctors(objJson)
        };
        fetchApi();

    }, [doctors]); 

    return (
        <ul className={styles.doctorsList}>
            {doctors.map((e) => (
                <li key={e.id} className={styles.doctorItem}>
                    <img src={`${caminhoImagem}${e.image}`} alt="Doctor Profile" className={styles.doctorImg} />
                    <div className={styles.doctorDetails}>
                        <h1 className={styles.doctorName}>
                            {e.name} <span><MdOutlineVerified /></span>
                        </h1>
                        <p className={styles.description}>{e.description}</p>
                        <p className={styles.stars}><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></p>
                        <p className={styles.address}><CiMap />{e.adress}</p>
                        <p className={styles.appointment}><SlCalender />{e.data}</p>
                        <Button placeholder="Agendar" />
                    </div>
                </li>
            ))}
        </ul>
    )
};