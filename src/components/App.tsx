import React from 'react'
import { Header, Home, Footer, About, Experience, Contact } from '../sections'
import ScrollTopArrow from './ScrollTopArrow'

import '../components/Icons'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollTopArrow />
    </>
  )
}

export default App
