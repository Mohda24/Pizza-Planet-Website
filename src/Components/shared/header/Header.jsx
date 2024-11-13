import React from 'react'
import TopHeader from './topHeader/TopHeader'
import Button from './button/Button'


function Header() {
    return (
        <>
        <TopHeader />
        <header>
            <div className="container">
                <Button text=" اطلب عبر الإنترنت "  />
            </div>
        </header>
        </>
    )
}

export default Header