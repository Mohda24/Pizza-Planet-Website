import React from 'react'
import s from './BigArticle.module.scss'
import Button from '../../../../shared/button/Button'

function BigArticle({img,date, title, content}) {
    return (
        <article className={s.BigArticle}>
            <div className={s.image}>
                <button> المقالات </button>
                <img src={img} alt="Image of Article" />
            </div>

            <div className={s.articleContent}>
                <span>{date}</span>
                <h4>{title}</h4>
                <p>{content}</p>
                
            </div>



            
        </article>
    )
}

export default BigArticle