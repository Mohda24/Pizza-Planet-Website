import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SectionPizzaPlanet from './SectionPizzaPlanet/SectionPizzaPlanet'
import SectionPizzaAdresse from './SectionPizzaAdresse/SectionPizzaAdresse'
import SectionBrowse from './SectionBrowse/SectionBrowse'
import SectionTasting from './SectionTasting/SectionTasting'




function Home() {
    return (
        <>
        <HeroSection />
        <main id='Main'>
                <SectionPizzaPlanet/>
                <SectionPizzaAdresse/>
                <SectionBrowse/>
                <SectionTasting/>
        </main>
        </>
    )
}

export default Home