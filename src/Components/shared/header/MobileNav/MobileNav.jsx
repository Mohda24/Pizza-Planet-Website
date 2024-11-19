import React,{useRef} from 'react'
import s from './MobileNav.module.scss'
import {logo} from '../../../../Assets/Svg/svg'
import Button from '../../button/Button'
import { NavLink } from 'react-router-dom'
import {HeaderContext} from '../Context/HeaderContext'

function MobileNav({myRef}) {
    const {showMobileNav,setShowMobileNav,setOverlay} = React.useContext(HeaderContext)

    const handleMenu=()=>{


        setShowMobileNav(false);
        setOverlay(false);
    }
    return (
        <nav ref={myRef} className={`${s.Mobile_nav} ${showMobileNav && s["slide-in"] } ${showMobileNav===false && s["slide-out"]}`}>
            <div className="logo" onClick={()=>setShowMobileNav(false)}>
                <img src={logo} alt="Logo for Planet Website" />
            </div>
            <ul className={s.Mobile_links}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.mobile_link} ${s.mobile_active}` : s.mobile_link} to="/contact"  onClick={handleMenu}> اتصل بنا </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.mobile_link} ${s.mobile_active}` : s.mobile_link} to="/menu"  onClick={handleMenu}> القائمة </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.mobile_link} ${s.mobile_active}` : s.mobile_link} to="/about"  onClick={handleMenu}> من نحن </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${s.mobile_link} ${s.mobile_active}` : s.mobile_link} to="/"  onClick={handleMenu}> الرئيسية </NavLink>
                </li>
                
            </ul>
            <Button text=" اطلب عبر الإنترنت " additionalClass="mobile_btn" />

        </nav>
    )
}

export default MobileNav