import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import styles from './DoctorsUL.module.css'
import ana from '../../img/ana.png'
import Button from "../forms/Button";
import antonio from '../../img/image.png'

export default function DoctorsUL() {
    return (
        <ul className={styles.doctorsList}>
            <li className={styles.doctorItem}>
                <img src={ana} alt="Doctor Profile" className={styles.doctorImg} />
                <div className={styles.doctorDetails}>
                    <h1 className={styles.doctorName}>
                        Dra. Ana Maria Nogueira <span><MdOutlineVerified /></span>
                    </h1>
                    <p className={styles.description}>Dermatologista, especialista em estética e câncer de pele</p>
                    <p className={styles.stars}><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></p>
                    <p className={styles.address}><CiMap /> Rua tal</p>
                    <p className={styles.appointment}><SlCalender /> Dia tal</p>
                    <Button placeholder="Agendar" />
                </div>
            </li>
            <li className={styles.doctorItem}>
                <img src={antonio} alt="Doctor Profile" className={styles.doctorImg} />
                <div className={styles.doctorDetails}>
                    <h1 className={styles.doctorName}>
                        Dra. Ana Maria Nogueira <span><MdOutlineVerified /></span>
                    </h1>
                    <p className={styles.description}>Dermatologista, especialista em estética e câncer de pele</p>
                    <p className={styles.stars}><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></p>
                    <p className={styles.address}><CiMap /> Rua tal</p>
                    <p className={styles.appointment}><SlCalender /> Dia tal</p>
                    <Button placeholder="Agendar" />
                </div>
            </li>
        </ul>
    )
}



