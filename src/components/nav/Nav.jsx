import { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { SiCodeproject } from 'react-icons/si'
import './Nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#xp" onClick={() => setActiveNav('#xp')} className={activeNav === '#xp' ? 'active' : ''}><BiBook /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><SiCodeproject /></a>
      <a href="#contact" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav