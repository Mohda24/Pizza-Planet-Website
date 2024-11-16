import React ,{useState} from "react";

const HeaderContext = React.createContext();

    const Provider = ({children}) => {
        const [showMobileNav, setShowMobileNav] = useState(null)
        const [overllay,setOverlay] = useState(false)
        const [ CartModal,setCartModal] = useState(null)
        return (
            <HeaderContext.Provider value={{showMobileNav,setShowMobileNav,overllay,setOverlay,CartModal,setCartModal}}>
                {children}
            </HeaderContext.Provider>
        )
    }
export {HeaderContext,Provider}
