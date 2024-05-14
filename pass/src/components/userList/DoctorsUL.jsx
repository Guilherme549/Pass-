import React, { useEffect, useState, useContext } from 'react';
import { FaRegStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import styles from './DoctorsUL.module.css';
import Button from "../forms/Button";
import axios from 'axios';
import { FilterGetContextDoctors } from '../../context/FiltertGetContextDoctors';

export default function DoctorsUL() {
    const doctors = useContext(FilterGetContextDoctors);
    console.log(doctors.id)
    console.log(doctors)
    const caminhoImagem = "http://127.0.0.1:8000/";
    return (
        <ul key={doctors.id} className={styles.doctorsList}>
            
                {doctors.map((e) => (
                    <li key={e.id} className={styles.doctorItem}>
                        <img src={`${caminhoImagem}${e.image}`} alt="Doctor Profile" className={styles.doctorImg} />
                        <div className={styles.doctorDetails}>
                            <h1 className={styles.doctorName}>
                                {e.name} <span><MdOutlineVerified /></span>
                            </h1>
                            <p className={styles.description}>{e.description}</p>
                            <p className={styles.stars}><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></p>
                            <p className={styles.address}><CiMap />{e.address}</p>
                            <p className={styles.appointment}><SlCalender />{e.date}</p>
                            <Button placeholder="Agendar" />
                        </div>
                    </li>
                ))}
            
        </ul>
    );
}
