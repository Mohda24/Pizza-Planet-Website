import React from 'react'
import s from './Copyright.module.scss'
import SocialMedia from '../SocialMedia/SocialMedia'

function Copyright() {
    return (
        <div className={s.Copyright}>
            <SocialMedia/>
            <p>©PIZZAPLANET 2024, All rights reserved.</p>

        </div>
    )
}

export default Copyright