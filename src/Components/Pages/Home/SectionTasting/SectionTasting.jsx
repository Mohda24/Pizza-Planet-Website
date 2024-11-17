import React from 'react'
import s from './SectionTasting.module.scss'
import { Tastingpizza, zayton } from "../../../../Assets/Images/pizzaImages"
import Button from '../../../shared/button/Button'

function SectionTasting() {
    return (
        <section className={s.SectionTasting}>
            <div className={s.TastingImage}>
                <img src={Tastingpizza} loading='lazy' alt="Picture of Tasting Pizza" />
            </div>
            <div className={s.TastingContent}>
                <div className={s.Tastingwrap}>
                    <img src={zayton} loading='lazy' alt="A small image of zayton" />
                </div>
                <h2>تذوق أشهى بيتزا في المغرب</h2>
                <p>استمتع بتجربة طعام لا تُنسى، مع مكونات طازجة ونكهات لذيذة، مصممة لتلبي جميع الأذواق. </p>
                <div className={s.TastingBtns}>
                <Button text={" احجز طاولة "}  customStyle={{ padding: "1.5rem 3.5rem" }} />
                <Button text={" من نحن "} additionalClass="btnAdresse" customStyle={{ padding: "1.5rem 3.5rem" }} />

                </div>


            </div>


        </section>
    )
}

export default SectionTasting