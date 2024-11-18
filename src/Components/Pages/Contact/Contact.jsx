import React from 'react'
import s from './Contact.module.scss'
import Form from "./../../shared/Form/Form"
import {tp1} from "../../../Assets/Images/pizzaImages"
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import SectionHeading from '../../shared/SectionHeading/SectionHeading';

function Contact() {
  return (
    <div className={s.contact}>
      <div className="container">
        <div className={s.contactImage}>
          <img src={tp1} alt="Image of contact us" />
        </div>
        <div className={s.contactForm}>
          <SectionHeading header={"تواصل معنا"} subheader={"هل لديك مشكلة تقنية؟ تريد إرسال ملاحظات حول ميزة تجريبية؟ تحتاج إلى تفاصيل حول خطتنا التجارية؟ دعنا نعرف"}/>
          <Form addisClass="formContact" />
        </div>
      </div>
      
    </div>

  )
}

export default Contact