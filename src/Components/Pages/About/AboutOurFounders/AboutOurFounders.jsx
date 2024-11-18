import React from 'react'
import s from './AboutOurFounders.module.scss'
import { imageLeft, imageRight } from '../../../../Assets/Images/pizzaImages';

function AboutOurFounders() {
    return (
        <section className={s.AboutOurFounders}>
            <div className="container">
                <div className={s.firstFounder}>
                    <div className={s.ImageWrapper}>
                        <img src={imageLeft} loading='lazy' alt="Founder" />
                    </div>
                    <div className={s.FirstStory}>
                        <h2>كيف التقى مؤسسونا</h2>
                        <p>
                            بدأت قصة مؤسسينا بلقاء غير متوقع قاد إلى تأسيس شركتنا. كان لديهم رؤية مشتركة وشغف لتقديم تجربة فريدة في مجال المطاعم.
                            <br /><br />
                            لقد ألهمهم حب الطعام والرغبة في تقديم الأفضل إلى الشروع في هذا المشروع الذي حقق نجاحاً باهراً على مر السنين.
                        </p>
                    </div>
                </div>
                <div className={s.SecondFounder}>
                    <div className={s.ImageWrapper}>
                        <img src={imageRight} loading='lazy' alt="Founder" />
                    </div>
                    <div className={s.SecondStory}>
                        <h2>قصة أول مطعم لنا</h2>
                        <p>
                            بدأت رحلتنا في عالم المطاعم منذ افتتاح أول مطعم لنا. كنا نسعى لتقديم تجربة فريدة من نوعها من خلال توفير أجواء رائعة وأطباق مميزة، مما جعل مطعمنا وجهة محبوبة لعشاق الطعام من كل مكان.
                        </p>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default AboutOurFounders