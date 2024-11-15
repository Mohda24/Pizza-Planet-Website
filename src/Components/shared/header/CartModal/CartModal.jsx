import React from 'react'
import s from './CartModal.module.scss'
import Button from '../../button/Button'

function CartModal() {
    return (
        <div className={s.CartModal}>
            <h3>سلة المشتريات</h3>
            <div className={s.seperator}/>
            <span>لا توجد منتجات.</span>
            <Button text={"إغلاق"}/>


        </div>
    )
}

export default CartModal