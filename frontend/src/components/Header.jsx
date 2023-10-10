import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

function Header({nbrItem}) {
  return (
    <header className='w-screen'>
        <Head/>
        <Search nbrItem = {nbrItem}/>
        <Navbar/>
    </header>
  )
}

export default Header
