import React from "react";
import styles from './CheckBox.module.css'

export default function CheckBox({name, id, value, icon}){

    function click(event){
        if(event.target.tagName === "LABEL"){
            const input = document.getElementById(event.target.htmlFor);
            if(input.checked){
                event.target.style.backgroundColor = "#f0f0f0";
                event.target.style.color = "#626161";
            } else {
                event.target.style.backgroundColor = "#888888";
                event.target.style.color = "white";
            }
        }
    }

    return(
        <div className={styles.checkbox_filter_search}>
            <label onClick={click} htmlFor={name}>{icon}{name}</label>
            <input  type="checkbox" name={name} id={id} value={value} />
        </div>
    )
}
