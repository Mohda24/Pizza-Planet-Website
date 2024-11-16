import React from 'react'
import s from './SectionCard.module.scss'

function SectionCard({img,title}) {
    return (
        <div className={s.SectionCart}>
            <div className={s.SectionCardWrapp}>
                <img src={img} alt="Picture for card" />
            </div>
            <h3>{title}</h3>

        </div>
    )
}

export default SectionCard