import React from 'react'
import AdresseItem from './AdresseItem/AdresseItem'
import Button from '../../../shared/button/Button'
import s from './SectionPizzaAdresse.module.scss'
import { map, phone, mail,DecorativeTop,DecorativeBottom } from "../../../../Assets/Svg/svg"
import { pizzaBigMen } from "../../../../Assets/Images/pizzaImages"
function SectionPizzaAdresse() {
    return (
        <section className={s.PizzaAdresseSection}>
            <img src={DecorativeTop} loading='lazy' className={s.DecorativeTop} alt="Decortive shape of top section" />
            <div className={s.PizzaAdresseContainer}>
                <div className={s.pizzaPlanetImg}>
                    <img src={pizzaBigMen} alt="Background for image of bigmen pizza" />
                </div>
                <div className={s.pizzaPlanetDatail}>
                    <div className={s.aboutPlanet}>
                        <h3>عن بيتزا بلانيت</h3>
                        <p>بيتزا بلانيت هي وجهتك المثالية لعشاق البيتزا، حيث نقدم لك تجربة طعام استثنائية باستخدام مكونات طازجة ومتنوعة. نحن نعتني بكل تفصيلة، من اختيار المكونات إلى طريقة التحضير، لضمان حصولك على أفضل تجربة طعام في أجواء مريحة وعصرية. انضم إلينا لتستمتع بأشهى أنواع البيتزا التي تُعد بعناية وحب.</p>
                    </div>
                    <div className={s.planetAdresse}>
                        <AdresseItem img={mail} title={"losangeles@pizzaplanet.com"} />
                        <AdresseItem img={phone} title={"(414) 857 - 0107"} />
                        <AdresseItem img={map} title={"837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles "} />
                    </div>
                    <div className={s.PizzaPlanetBtns}>
                        <Button text={" احجز طاولة "} additionalClass="btnAdresse2" customStyle={{ padding: "1.5rem 3.5rem" }} />
                        <Button text={" من نحن "} additionalClass="btnAdresse" customStyle={{ padding: "1.5rem 3.5rem" }} />
                    </div>
                </div>
            </div>
            <img src={DecorativeBottom} className={s.DecorativeBottom} alt="Decortive shape of Bottom section" />


        </section>
    )
}

export default SectionPizzaAdresse