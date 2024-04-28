import React from "react";
import styles from './Button.module.css'

export default function Button({placeholder}){
    return (
        <div className={styles.div_btn}>
            <button>{placeholder}</button>
        </div>
    )
}