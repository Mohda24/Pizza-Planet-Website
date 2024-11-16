import React from 'react'
import { zayton ,pizza} from '../../../../Assets/Images/pizzaImages'
import s from './HeroSection.module.scss'
import Button from '../../../shared/button/Button' //


function HeroSection() {
    return (
        <div className={s.HeroSection}>
            <div className={s.HeroSectionContent}>
                <div className={s.HeroImage}>
                    <img src={zayton} alt="" />
                </div>
                <h1>أفضل مكان لتناول البيتزا بسهولة</h1>
                <p>نقدم تجربة فريدة لعشاق البيتزا بمكونات طازجة وخيارات متنوعة تناسب جميع الأذواق، في أجواء مريحة وعصرية.</p>
                <div className={s.HeroBtns}>
                <Button text="احجز طاولة" additionalClass="btnHero"/>
                <Button text="اطلب عبر الإنترنت"/>
                </div>
            </div>
            <div className={s.HeroSectionImage}>
                <img src={pizza} alt="Picture of Pizza " />
            </div>

        </div>
    )
}

export default HeroSection