import React from 'react'
import s from './AboutHero.module.scss'

function AboutHero() {
    return (
        <section className={s.AboutHero}>
            <div className="container">
                <h1>بدأت قصتنا في عام 1984</h1>
                <p>لقد بدأنا رحلتنا منذ أكثر من ثلاثة عقود، مستوحين شغفنا لتقديم أفضل تجارب الطعام لعملائنا. نسعى دائمًا إلى تحسين وتطوير خدماتنا لتلبية توقعات كل من يزورنا</p>
            </div>
        </section>
    )
}

export default AboutHero