import React from 'react'
import s from './Form.module.scss'
import Button from '../button/Button'

function Form({addisClass=false}) {
    return (
        <form className={`${addisClass ? s[addisClass] :""} ${s.form}`} action="#">
            <div className={s.formEmail}>
                <label htmlFor="email">بريدك الإلكتروني</label>
                <input id='email' type="email" name='email' placeholder='name@gmail.com' autocomplete="on" required />
            </div>

            <div className={s.formSubject}>
                <label htmlFor="subject">الموضوع</label>
                <input id='subject' type="text" name='Subject' autocomplete="on" placeholder='أخبرنا كيف يمكننا مساعدتك' required />
            </div>

            <div className={s.formMessage}>
                <label htmlFor="Message">رسالتك</label>
                <textarea id='Message' name="Message" rows={6} autocomplete="off" placeholder='اترك تعليقًا...'></textarea>

            </div>
            <Button text={"إرسال الرسالة"}/>


        </form>
    )
}

export default Form