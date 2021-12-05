import { useState, createContext } from "react";

const NavContext = createContext();

export default function NavProvider({children}) {
    const [toggleNav, setToggleNav] = useState(false);
    const handleToggleNav = () => {
        setToggleNav(!toggleNav);
    }
    const value = {
        toggleNav,
        handleToggleNav
    }
    return (
        <NavContext.Provider value={value}>
            {children}
        </NavContext.Provider>
    )
}
export {NavContext};