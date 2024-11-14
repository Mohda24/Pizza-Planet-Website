import React from 'react'
import TopHeader from './topHeader/TopHeader'
import Button from './../../shared/button/Button'
import {shop} from "./../../../Assets/Svg/svg"
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { logo } from '../../../Assets/Svg/svg'
import MobileNav from './MobileNav/MobileNav'


function Header() {
    return (
        <>
        <TopHeader />
        <header className={s.header}>
            <div className="container">
                <Button text=" اطلب عبر الإنترنت " additionalClass="large" />
                <button className={s.addToCart}>
                    <img src={shop} alt="Icon for Cart in shoping"  />
                </button>
                <ul className={s.links}>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link} to="/contact" > اتصل بنا </NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link} to="/menu" > القائمة </NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link} to="/about" > من نحن </NavLink>
                    <NavLink className={({ isActive }) => isActive ?  `${s.link} ${s.active}` : s.link} to="/" > الرئيسية </NavLink>
                </ul>
                <div className={s.logo}>
                    <img src={logo} alt="Logo For Pizza Planet Website" />
                </div>
            </div>
            <MobileNav />
        </header>
        </>
    )
}

export default Header