import React from 'react'
import s from './OurFood.module.scss'
import SectionHeading from '../../../shared/SectionHeading/SectionHeading'
import PizzaCard from "../../../shared/PizzaCard/PizzaCard"
import pizzas from "../../../../Data/pizzaData"

function OurFood() {
    return (
        <section className={s.OurFoodSection}>
            <div className="container">
                <SectionHeading header={"قائمة طعامنا"} subheader={"نقدم لكم مجموعة من أشهى وألذ الأطباق، تم تحضيرها بعناية باستخدام أفضل المكونات الطازجة لإرضاء جميع الأذواق. "} />

                <div className={s.OurFoodCards}>
                    {/* foods cards data */}
                    {pizzas.map((pizza) => {
                        return <PizzaCard key={pizza.id} img={pizza.img} name={pizza.name} price={pizza.price} />
                    })}

                </div>
            </div>

        </section>
    )
}

export default OurFood