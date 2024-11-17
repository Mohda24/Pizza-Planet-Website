import React from 'react'
import s from './SectionArticles.module.scss'
import Button from '../../../shared/button/Button'
import Article from './Article/Article'
import ArticlesData from "../../../../Data/Articles";
import BigArticle from './BigArticle/BigArticle';
import { firstPizza } from "../../../../Assets/Images/pizzaImages"

function SectionArticles() {
    return (
        <section className={s.SectionArticles}>
            <div className="container">
                <div className={s.SectionArticlesHeadng}>
                    <h2>مقالاتنا</h2>
                    <Button text={" تصفح جميع المقالات "} customStyle={{ padding: "1.5rem 3.5rem" }} />
                </div>
                <BigArticle
                    img={firstPizza}
                    date="12 نوفمبر 2023"
                    title="توصيل البيتزا: رحلة عبر الزمن"
                    content="تعرف على تاريخ وكيفية تطوير خدمات توصيل البيتزا حول العالم."
                />

                <div className={s.articles}>
                    {ArticlesData.map((article, index) => {
                        return <Article
                            key={index}
                            img={article.img}
                            date={article.date}
                            title={article.title}
                            content={article.content}
                        />
                    })}

                </div>



            </div>

        </section>
    )
}

export default SectionArticles