import React from 'react'
import s from './PageNotFound.module.scss'
import Lottie from 'lottie-react'
import animation from './Animation/NotFoundAnimation.json';
import { Helmet } from 'react-helmet-async'

function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Page not found description" />
      </Helmet>
      <section id='NotFoundPage'>
        <div className="container">
          <div className={s.NotFoundPage}>
            <div className={s.notFoundAnimation}>
              <Lottie
                animationData={animation}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className={s.NotFoundContent}>
              <h1>الصفحة غير موجودة</h1>
              <p>لقد بحثنا في كل مكان عن هذه الصفحة.
                هل أنت متأكد من صحة عنوان URL لموقع الويب؟
                تواصل مع صاحب الموقع.</p>
              <a href="/">Go Back Home</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageNotFound
