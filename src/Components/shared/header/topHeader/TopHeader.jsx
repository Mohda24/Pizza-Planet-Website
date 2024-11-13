import React from 'react'
import s from './TopHeader.module.scss';
import { o1, o2, o3, o4 } from '../../../../Assets/Svg/svg';

function TopHeader() {
    return (
        <div className={s.TopHeader}>
            <div className="container">
                <div className={s.orderNow}>
                    <div className={s.Icons}>
                        <img className={s.IconImg} src={o4} alt="icon 4 for top header" />
                        <img className={s.IconImg} src={o3} alt="icon 3 for top header" />
                        <img className={s.IconImg} src={o2} alt="icon 2 for top header" />
                        <img className={s.IconImg} src={o1} alt="icon 1 for top header" /> 
                    </div>
                    <span className={s.orderNowHeading}>اطلب الآن:</span>
                </div>
                <span className={s.ContactUs}>اتصل بنا: (413) 345 - 9821</span>
            </div>
        </div>
    )
}

export default TopHeader