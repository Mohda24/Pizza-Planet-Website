import React from 'react'
import s from './CartModal.module.scss'
import Button from '../../button/Button'
import {useContext} from 'react'
import {HeaderContext} from './../Context/HeaderContext'

function CartModal() {
    const {CartModal,setCartModal,setOverlay} = useContext(HeaderContext)

    const handleModal=()=>{
        setCartModal(false)
        setOverlay(false)
    }
    return (
        <div className={`${s.cartModal} ${CartModal ? CartModal && s['bombel-anim'] :''} ${CartModal===false ? s['bombel-anim-out'] :''}`}>
            <h3>سلة المشتريات</h3>
            <div className={s.seperator}/>
            <span>لا توجد منتجات.</span>
            <Button text={"إغلاق"} Myfunction={handleModal} />


        </div>
    )
}

export default CartModal