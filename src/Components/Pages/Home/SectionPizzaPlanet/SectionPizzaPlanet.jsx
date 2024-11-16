import React from 'react'
import s from './SectionPizzaPlanet.module.scss'
import SectionHeading from '../../../shared/SectionHeading/SectionHeading'
import {p1,p2,p3} from "../../../../Assets/Images/pizzaImages"
import SectionCard from './SectionCard/SectionCard'
import Button from '../../../shared/button/Button'

function SectionPizzaPlanet() {
    return (

        <section className={s.PizzaPlanetSection}>
            <div className="container">
                <SectionHeading header="قائمة بيتزا بلانيت" subheader="متطلبات تتعلق بالأطعمة مع التركيز على تحضير كل نوع من الأنواع بحب وعناية. كل طبق من أطباقنا يتم تحضيره بأجود المكونات الطازجة لتلبية جميع الأذواق وتقديم تجربة مميزة. تعال واستمتع بجو مريح وأطعمة لذيذة. " />

                <div className={s.SectionCards}>
                    <SectionCard img={p1} title={"الحلويات"}/>
                    <SectionCard img={p2} title={"المشروبات"}/>
                    <SectionCard img={p3} title={"البيتزا"}/>
                </div>
                <div className={s.SectionBtns}>
                <Button text="اطلب عبر الإنترنت" customStyle={{padding:"1.5rem 3.5rem"}} />
                <Button text="احجز طاولة" customStyle={{padding:"1.5rem 3.5rem"}} additionalClass="btnHero"/>
                
                </div>
            </div>

        </section>
    )
}

export default SectionPizzaPlanet