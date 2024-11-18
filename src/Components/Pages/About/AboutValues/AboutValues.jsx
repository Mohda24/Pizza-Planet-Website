import React from 'react'
import s from './AboutValues.module.scss'
import ValueCard from './ValueCard/ValueCard'
import ValuesData from "../../../../Data/ValueCards";
import ContactUs from "../../Home/ContactUs/ContactUs"

function AboutValues() {
    return (
        <section className={s.valuesAbout}>
            <div className="container">
            <h2 className={s.valueHeader}>القيم التي توجه كل ما نقوم به</h2>
            <div className={s.valuesCards}>
                {/* ValueCard Component */}
                {ValuesData.map((value) => {
                    return <ValueCard key={value.id} img={value.img} name={value.name} description={value.description} />
                })}


                
            </div>

            <ContactUs />


            </div>
        </section>
    )
}

export default AboutValues