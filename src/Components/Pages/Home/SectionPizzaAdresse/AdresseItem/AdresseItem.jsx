import React from 'react'
import s from './AdresseItem.module.scss'

function AdresseItem({img,title}) {
    return (
        <div className={s.AdresseItem}>
            <div className={s.AdresseIcon}>
                <img src={img} alt={`icon of ${img.split(".")[0]}`}/>
            </div>
            <span className={s.Adresse}>{title}</span>
        </div>
    )
}
export default AdresseItem