import React,{useContext,useEffect,useRef} from 'react'
import TopHeader from './topHeader/TopHeader'
import Button from './../../shared/button/Button'
import {shop} from "./../../../Assets/Svg/svg"
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { logo } from '../../../Assets/Svg/svg'
import MobileNav from './MobileNav/MobileNav'
import { menu } from './../../../Assets/Svg/svg'
import {HeaderContext} from './Context/HeaderContext'
import Overllay from './Overllay/Overllay'
import CartModal from './CartModal/CartModal'






function Header() {
    const {showMobileNav, setShowMobileNav,overllay,setOverlay,setCartModal} = useContext(HeaderContext)
    const mobileRef= useRef(null)

    useEffect(() => {
        if(!showMobileNav)return
        const handleClick = (e) => {
            if(mobileRef.current && !mobileRef.current.contains(e.target)){
                setShowMobileNav(false)
                setOverlay(false)
            }
        }
        document.addEventListener('mousedown',handleClick)
        return () => {
            document.removeEventListener('mousedown',handleClick)
        }
    },[showMobileNav])

    const handleMenu=()=>{
        setShowMobileNav(true)
        setOverlay(true)

    }
    const handleModal=()=>{
        setCartModal(true)
        setOverlay(true)
    }
    

    
    return (
        <>
        <TopHeader />
        <header className={s.header}>
            <div className="container">
                <button className={s.mobile_icon}
                onClick={()=>handleMenu()}              
                >
                    <img src={menu} alt="Icon for Menu button" />
                </button>
                <Button text=" اطلب عبر الإنترنت " additionalClass="large"  />
                <button className={s.addToCart} onClick={handleModal}>
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
            <CartModal />
            { overllay && <Overllay/> }
            <MobileNav myRef={mobileRef} />
        </header>
        </>
    )
}

export default Header