import React from 'react'
import s from './Contact.module.scss'
import Form from "./../../shared/Form/Form"
import { tp1 } from "../../../Assets/Images/pizzaImages"
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import SectionHeading from '../../shared/SectionHeading/SectionHeading';
import Seo from '../../shared/Seo/Seo';

function Contact() {
  return (
    <>
      <Seo
        title="Contact Us || Pizza Planet - Get in Touch"
        description="Get in touch with Pizza Planet for any inquiries, feedback, or to place an order. We are here to provide you with the best pizza experience."
        keywords="Contact Pizza Planet, Pizza Inquiries, Pizza Feedback, Order Pizza, Best Pizza, Pizza Planet"
        type="website"
        name="Pizza Planet"
      />
      <div className={s.contact}>
        <div className="container">
          <div className={s.contactImage}>
            <img src={tp1} alt="Image of contact us" />
          </div>
          <div className={s.contactForm}>
            <SectionHeading header={"تواصل معنا"} subheader={"هل لديك مشكلة تقنية؟ تريد إرسال ملاحظات حول ميزة تجريبية؟ تحتاج إلى تفاصيل حول خطتنا التجارية؟ دعنا نعرف"} />
            <Form addisClass="formContact" />
          </div>
        </div>

      </div>
    </>

  )
}

export default Contact