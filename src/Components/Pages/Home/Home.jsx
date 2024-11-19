import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import SectionPizzaPlanet from './SectionPizzaPlanet/SectionPizzaPlanet'
import SectionPizzaAdresse from './SectionPizzaAdresse/SectionPizzaAdresse'
import SectionBrowse from './SectionBrowse/SectionBrowse'
import SectionTasting from './SectionTasting/SectionTasting'
import SectionArticles from './SectionArticles/SectionArticles'
import ContactUs from './ContactUs/ContactUs'
import Seo from '../../shared/Seo/Seo'




function Home() {
    return (
        <>
            <Seo
                title="Home || Pizza Planet - Best Pizza in Town"
                description="Welcome to Pizza Planet, the best place to enjoy delicious pizza with fresh ingredients. Order online or visit us today!"
                keywords="Pizza, Best Pizza, Pizza Planet, Fresh Ingredients, Online Order, Pizza Delivery"
                type="website"
                name="Pizza Planet"
            />
            <HeroSection />
            <main id='Main'>
                <SectionPizzaPlanet />
                <SectionPizzaAdresse />
                <SectionBrowse />
                <SectionTasting />
                <SectionArticles />
                <ContactUs />
            </main>
        </>
    )
}

export default Home