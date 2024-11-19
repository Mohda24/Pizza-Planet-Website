import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import AboutSeen from './AboutSeen/AboutSeen'
import AboutOurFounders from './AboutOurFounders/AboutOurFounders'
import AboutOurTeam from './AboutOurTeam/AboutOurTeam'
import AboutValues from './AboutValues/AboutValues'
import Seo from '../../shared/Seo/Seo'

function About() {
    return (
        <>
            <Seo
                title="About Us || Pizza Planet - Our Story"
                description="Learn more about Pizza Planet, our story, and our commitment to providing the best pizza experience with fresh ingredients and exceptional service."
                keywords="About Pizza Planet, Our Story, Best Pizza, Fresh Ingredients, Pizza Planet, Pizza Restaurant"
                type="website"
                name="Pizza Planet"
            />
            <AboutHero />
            <AboutSeen />
            <AboutOurFounders />
            <AboutOurTeam />
            <AboutValues />
        </>


    )
}

export default About