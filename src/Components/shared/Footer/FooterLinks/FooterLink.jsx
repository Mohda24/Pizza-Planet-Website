import React from 'react'
import s from './FooterLink.module.scss'

function FooterLink({header,links}) {
    return (
        <div className={s.FooterLink}>
            <h4>{header}</h4>
            <ul>
                {links.map((link,index)=>{
                    return <li key={index}>{link}</li>
                })}
            </ul>

        </div>
    )
}

export default FooterLink