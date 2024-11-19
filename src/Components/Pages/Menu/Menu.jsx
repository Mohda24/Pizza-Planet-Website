import React from 'react'
import OurFood from './OurFood/OurFood'
import OurApplication from './OurApplication/OurApplication'
import Seo from '../../shared/Seo/Seo'

function Menu() {
  return (
    <>
    <Seo 
    title="Menu || Pizza Planet - Explore Our Delicious Menu" 
    description="Discover our wide range of delicious pizzas, made with fresh ingredients and a variety of toppings to suit all tastes. Order online or visit us today!" 
    keywords="Pizza Menu, Pizza Toppings, Best Pizza, Pizza Planet, Fresh Ingredients, Online Order, Pizza Delivery" 
    type="website" 
    name="Pizza Planet"
/>
    <OurFood />
    <OurApplication />
    
    </>
  )
}

export default Menu