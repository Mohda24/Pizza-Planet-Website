import React from 'react'
import s from './AboutOurTeam.module.scss'
import SectionHeading from '../../../shared/SectionHeading/SectionHeading'
import Card from './TeamCard/TeamCard'
import teamMembers from "../../../../Data/TeamMembres";

function AboutOurTeam() {
    return (
        <section className={s.AboutOurTeam}>
            <div className="container">
                <SectionHeading header={"تعرف على فريقنا"} subheader={"نقدم لكم فريقنا المتفاني الذي يعمل بجد لضمان تقديم أفضل تجربة لعملائنا. يتمتع أعضاء فريقنا بخبرة كبيرة وشغف حقيقي بما يفعلونه. "}/>

                <div className={s.TeamCards}>
                    {/* TeamCard Component */}
                    {teamMembers.map((member, index) => {
                        return (
                            <Card 
                                key={index}
                                img={member.img}
                                name={member.name}
                                position={member.position}
                                description={member.description}
                            />
                        )
                    })}
                    
                </div>

                

            </div>


            

        </section>
    )
}

export default AboutOurTeam