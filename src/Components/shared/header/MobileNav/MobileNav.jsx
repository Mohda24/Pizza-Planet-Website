import React from 'react'
import s from './MobileNav.module.scss'
import {logo} from '../../../../Assets/Svg/svg'
import Button from '../../button/Button'
import { NavLink } from 'react-router-dom'

function MobileNav({showMobileNav, setShowMobileNav}) {
    return (
        <nav className={`${s.Mobile_nav} ${showMobileNav && s["slide-in"] } ${showMobileNav===false && s["slide-out"]}`}>
            <div className="logo">
                <img src={logo} alt="Logo for Planet Website" />
            </div>
            <ul className={s.Mobile_links}>
                <NavLink className={({ isActive }) => isActive ? `${s.mobile_link} ${s.mobile_active}` : s.mobile_link} to="/contact" > اتصل بنا </NavLink>
                <NavLink className={({ isActive }) => isActive ? `${s.mobile_link} ${s.mobile_active}` : s.mobile_link} to="/menu" > القائمة </NavLink>
                <NavLink className={({ isActive }) => isActive ? `${s.mobile_link} ${s.mobile_active}` : s.mobile_link} to="/about" > من نحن </NavLink>
                <NavLink className={({ isActive }) => isActive ? `${s.mobile_link} ${s.mobile_active}` : s.mobile_link} to="/" > الرئيسية </NavLink>
            </ul>
            <Button text=" اطلب عبر الإنترنت " additionalClass="mobile_btn" />

        </nav>
    )
}

export default MobileNav