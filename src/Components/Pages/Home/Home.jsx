import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SectionPizzaPlanet from './SectionPizzaPlanet/SectionPizzaPlanet'
import SectionPizzaAdresse from './SectionPizzaAdresse/SectionPizzaAdresse'



function Home() {
    return (
        <>
        <HeroSection />
        <main id='Main'>
                <SectionPizzaPlanet/>
                <SectionPizzaAdresse/>
                <div style={{background:"white",minHeight:"100vh"}}></div>
        </main>
        </>
    )
}

export default Home