import React from 'react'
import s from './ContactUs.module.scss'
import Form from '../../../shared/Form/Form'
import SectionHeading from '../../../shared/SectionHeading/SectionHeading'

function ContactUs() {
    return (
        <section className={s.ContactUs}>
            <div className="container">
                <SectionHeading  header={"تواصل معنا"} subheader={" هل لديك مشكلة تقنية؟ تريد إرسال ملاحظات حول ميزة تجريبية؟ تحتاج إلى تفاصيل حول خطتنا التجارية؟ دعنا نعرف. "}/>
            <Form/>
            </div>
            
        </section>
    )
}

export default ContactUs