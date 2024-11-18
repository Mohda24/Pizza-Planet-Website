import React from 'react'
import s from './TeamCard.module.scss'
function TeamCard({img, name, position, description}) { // Destructuring props
    return (
        <div className={s.Card}>
            <div className={s.cardImage}>
                <img src={img} loading='lazy' alt="Profile Picture Of our Team" />
            </div>
            <div className={s.cardContent}>
                <span>{name}</span>
                <h5>{position}</h5>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default TeamCard
