import Intro from './components/intro/Intro'
import Topbar from './components/topbar/Topbar'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import './App.scss'

import { useState } from 'react'
import Menu from './components/menu/Menu'

function App() {
  // deceide whether menu is open or not, when click menu icon, change the state
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className='sections'>
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
