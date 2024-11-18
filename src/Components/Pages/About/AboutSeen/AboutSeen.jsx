import React from 'react'
import s from './AboutSeen.module.scss'
import { a1, a2, a3, a4 } from "../../../../Assets/Svg/svg";

function AboutSeen() {
    return (
        <div className={s.Seen}>
            <div className="container">
                <span>كما شوهد في  :</span>
                <div className={s.Logos}>
                    <img src={a1} alt="icons for Seens" />
                    <img src={a2} alt="icons for Seens" />
                    <img src={a3} alt="icons for Seens" />
                    <img src={a4} alt="icons for Seens" />
                </div>
            </div>



        </div>
    )
}

export default AboutSeen