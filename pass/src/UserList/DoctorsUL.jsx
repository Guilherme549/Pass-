import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";


export default function DoctorsUL(){
    return (
        <ul>
            <li>
                <div>
                    <h2>
                        Dra. Ana Maria Nogueira <span><MdOutlineVerified /></span>
                    </h2>
                    <p><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></p>
                    <p><CiMap/> Rua tal</p>
                    <p><SlCalender/> Dia tal</p>
                </div>
            </li>
        </ul>
    )
}