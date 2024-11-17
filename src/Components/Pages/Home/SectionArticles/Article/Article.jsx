import React from 'react'
import s from './Article.module.scss'

function Article({img,date, title, content}) {
    return (
        <article className={s.article}>
            <img src={img} loading='lazy' alt={`Image of Article ${img.split(".")[0]}`} />
            <div className={s.articleContent}>
                <span>{date}</span>
                <h4>{title}</h4>
                <p>{content}</p>
                
            </div>

        </article>
    )
}

export default Article