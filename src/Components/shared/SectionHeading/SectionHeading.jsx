import React,{useRef} from 'react'
import s from './SectionHeading.module.scss'
import useOnScreen from '../../../Hooks/UseOnScreen'

function SectionHeading({header, subheader,custom={}}) {
    const headingRef = useRef(null)
    const isVisible = useOnScreen(headingRef,{rootMargin: "100px", threshold: 0.1});
    return (
        <div style={custom} ref={headingRef} className={`${s.TitleHeading} ${isVisible ? s['TitleHeading-Anim'] :''}`}>
            <h2>{header}</h2>
            <p>{subheader}</p>
        </div>
    )
}

export default SectionHeading