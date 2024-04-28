import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import styles from './DoctorsUL.module.css'
import ana from '../../img/ana.png'

export default function DoctorsUL(){
    return (
        <ul className={styles.doctorsList}>
            <li className={styles.doctorItem}>
                <img src={ana} alt="Doctor Profile" /> {/* Adicione o caminho para sua imagem */}
                <div className={styles.doctorInfo}>
                    <h2 className={styles.doctorName}>
                        Dra. Ana Maria Nogueira <span><MdOutlineVerified /></span>
                    </h2>
                    <p className={styles.description}>Dermatologista louca da cabeca </p>
                    <p className={styles.stars}><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></p>
                    <p className={styles.address}><CiMap/> Rua tal</p>
                    <p className={styles.appointment}><SlCalender/> Dia tal</p>
                </div>
            </li>
        </ul>
    )
}