import React from 'react'
import s from './ValueCard.module.scss'
function ValueCard({img, name, description}) {
    return (
        <div className={s.ValueCard}>
            <img src={img} alt="Image of Value card"/>
            <h6>{name}</h6>
            <p>{description}</p>
        </div>
    )
}

export default ValueCard