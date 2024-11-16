import {React,useRef} from 'react'
import { zayton ,pizza} from '../../../../Assets/Images/pizzaImages'
import s from './HeroSection.module.scss'
import Button from '../../../shared/button/Button' //
import useOnScreen from '../../../../Hooks/UseOnScreen'


function HeroSection() {
    // HeroSection Animation
    const myref = useRef(null);
    const isVisible = useOnScreen(myref,{rootMargin: "0px", threshold: 0.1});
    // Image Animation
    const myref2 = useRef(null);
    const isVisible2 = useOnScreen(myref2,{rootMargin: "0px", threshold: 0.1});
    return (
        <div className={s.HeroSection}>
            <div className={`${s.HeroSectionContent} ${isVisible ? s['fadeIn'] :''}`} ref={myref}>
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
            <div ref={myref2} className={`${s.HeroSectionImage} ${isVisible2 ? s["fadeImageIn"] :""}`}>
                <img src={pizza} alt="Picture of Pizza " />
            </div>

        </div>
    )
}

export default HeroSection