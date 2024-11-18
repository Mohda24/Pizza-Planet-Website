import React from 'react'
import s from './Form.module.scss'
import Button from '../button/Button'

function Form() {
    return (
        <form className={s.form} action="#">
            <div className={s.formEmail}>
                <label htmlFor="email">بريدك الإلكتروني</label>
                <input type="email" name='email' placeholder='name@gmail.com' required />
            </div>

            <div className={s.formSubject}>
                <label htmlFor="subject">الموضوع</label>
                <input type="text" name='Subject' placeholder='أخبرنا كيف يمكننا مساعدتك' required />
            </div>

            <div className={s.formMessage}>
                <label htmlFor="Message">رسالتك</label>
                <textarea name="Message" rows={6} placeholder='اترك تعليقًا...'></textarea>

            </div>
            <Button text={"إرسال الرسالة"}/>


        </form>
    )
}

export default Form