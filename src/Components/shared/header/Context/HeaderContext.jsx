import React ,{useState} from "react";

const HeaderContext = React.createContext();

    const Provider = ({children}) => {
        const [showMobileNav, setShowMobileNav] = useState(null)
        const [overllay,setOverlay] = useState(false)
        return (
            <HeaderContext.Provider value={{showMobileNav,setShowMobileNav,overllay,setOverlay}}>
                {children}
            </HeaderContext.Provider>
        )
    }
export {HeaderContext,Provider}
