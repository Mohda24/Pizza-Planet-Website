import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SectionPizzaPlanet from './SectionPizzaPlanet/SectionPizzaPlanet'
import SectionPizzaAdresse from './SectionPizzaAdresse/SectionPizzaAdresse'
import SectionBrowse from './SectionBrowse/SectionBrowse'
import SectionTasting from './SectionTasting/SectionTasting'
import SectionArticles from './SectionArticles/SectionArticles'
import ContactUs from './ContactUs/ContactUs'




function Home() {
    return (
        <>
        <HeroSection />
        <main id='Main'>
                <SectionPizzaPlanet/>
                <SectionPizzaAdresse/>
                <SectionBrowse/>
                <SectionTasting/>
                <SectionArticles/>
                <ContactUs/>
        </main>
        </>
    )
}

export default Home