import React from "react";
import styles from './CheckBox.module.css'

export default function CheckBox({name, id, value, icon}){
    return(
        <div className={styles.checkbox_filter_search}>
            <label htmlFor={name}>{icon}{name}</label>
            <input type="checkbox" name={name} id={id} value={value} />
        </div>
    )
}