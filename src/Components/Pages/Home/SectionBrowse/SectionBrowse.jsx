import React from 'react'
import s from './SectionBrowse.module.scss'
import SectionHeading from '../../../shared/SectionHeading/SectionHeading'
import PizzaCard from '../../../shared/PizzaCard/PizzaCard'
import pizzas from '../../../../Data/pizzaData';
import Button from '../../../shared/button/Button'

function SectionBrowse() {
    return (
        <section className={s.BrowsSection}>
            <div className="container">
                <SectionHeading header={"تصفح قائمتنا"} subheader={"نقدم مجموعة متنوعة من الأطباق الشهية التي تجمع بين المكونات الطازجة والنكهات المحلية. استمتع بتجربة طعام فريدة من نوعها مستوحاة من التقاليد، مصممة لتناسب جميع الأذواق. "} />
                <div className={s.PizzaCards}>
                    {/* Pizza Card */}
                    {pizzas.map((pizza) => {
                        return <PizzaCard key={pizza.id} img={pizza.img} name={pizza.name} price={pizza.price} />
                    })}

                </div>
                <div className={s.BrowseBtns}>
                <Button text={" احجز طاولة "} additionalClass="btnBrowser" customStyle={{ padding: "1.5rem 3.5rem" }} />
                <Button text={" من نحن "} customStyle={{padding:"1.5rem 3.5rem"}} additionalClass="btnHero"/>

                </div>
            </div>


        </section>
    )
}

export default SectionBrowse