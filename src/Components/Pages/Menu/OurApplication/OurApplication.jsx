import React from 'react'
import s from './OurApplication.module.scss'
import SectionHeading from '../../../shared/SectionHeading/SectionHeading'
import { a1, a2, a3, a4, a5, a6, a7, a8 } from "../../../../Assets/Svg/svg"

function OurApplication() {
    const icons = [a1, a2, a3, a4, a5, a6, a7, a8]
    return (
        <section className={s.OurApplication}>
            <div className="container">
                <SectionHeading custom={{color:"white"}} header={"الطلب عبر التطبيق"} subheader={"حمل تطبيقنا الآن واطلب بكل سهولة أينما كنت! اختر البيتزا المفضلة لديك واستمتع بخدمة سريعة ومريحة."} />
                <div className={s.services}>
                    {/* service card */}
                    {Array(8).fill().map((_, index) => {
                        return (
                            <div key={index} className={s.service}>
                                <img loading='lazy' src={icons[index]} alt="Icon for services" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default OurApplication