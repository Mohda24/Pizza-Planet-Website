import React from 'react'
import { Helmet } from 'react-helmet-async'
function Seo({ title, description, keywords, type, preImages = [] }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            {/* preload Big Images */}
            {preImages && preImages.map((image,index) => {
                return <link
                    key={index}
                    rel="preload"
                    href={image}
                    as="image"
                    type="image/webp"
                />
            })}
            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */}
        </Helmet>
    )
}

export default Seo