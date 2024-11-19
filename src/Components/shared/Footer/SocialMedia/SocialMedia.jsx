import React from 'react'
import s from './SocialMedia.module.scss'
import {insta,facebook,github,linkden} from '../../../../Assets/Svg/svg'

function SocialMedia() {
    return (
        <div className={s.SocialMedia}>
            <a className="youtubeIcon" alt=" a link for socialMedia Account" href='#' >
                <img src={insta} alt=" Icon for instagram" />
            </a>
            <a className="linkdenIcon" alt=" a link for socialMedia Account" href='https://github.com/Mohda24'>
                <img src={github} alt=" Icon for github" />
            </a>
            <a className="InstaIcon" alt=" a link for socialMedia Account" href='#'>
                <img src={linkden} alt=" Icon for linkden" />
            </a>
            <a className="youtubeIcon" alt=" a link for socialMedia Account"  href='https://web.facebook.com/profile.php?id=100018567512305'>
                <img src={facebook} alt=" Icon for Facebook" />
            </a>
            
        </div>
    )
}

export default SocialMedia