import React from 'react'
import { Provider } from '../Context/HeaderContext'
import Header from '../Header'

function HeaderProvider() {
    return (
        <Provider>
            <Header />
        </Provider>
        
    )
}

export default HeaderProvider