import React from 'react'
import Dsidebar from '../Dsidebar/Dsidebar'
import DHeader from "../DHeader/Dheader";


const Layout = ({children}) => {
  return (
    <div>
        <DHeader/>
        <div style={{display:"flex"}}>
            <Dsidebar/>
            <div style={{width:"100%"}}>{children}</div>
        </div>
    </div>
  )
}

export default Layout