import React from 'react'
import s from './PizzaCard.module.scss'

function PizzaCard({img, name, price}) {
    return (
        <div className={s.PizzaCard}>
            <div className="cardImage">
                <img loading='lazy' src={img} alt={`image card of ${img.split('.')[0]}`} />
            </div>
            <h5>{name}</h5>
            <span>{price}</span>
        </div>
    )
}

export default PizzaCard