import React from "react"
import Navbar from "../Navbar/Navbar"

// For react 18
type Props = {
    children: React.ReactNode
}

// Aded <props> here for react 18
const Layout: React.FC<Props> = ({ children }) => {
    return (
       <>
        <Navbar />
        <main>{children}</main>
       </> 
    )
}

export default Layout
