import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className='--pad' style={{minHeight: "80vh"}}>
        {children}
    </div>
    <Footer/>    
    </>
  )
}

export default Layout
