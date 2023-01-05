import { useState, useEffect } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { BsFileCode } from 'react-icons/bs'
import { SiCodeproject } from 'react-icons/si'
import { isInViewport, redirect } from '../common/data'
import './Nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('header')

  const handleScroll = () => {
    ['header', 'about', 'qualifications', 'skills', 'projects', 'contact'].forEach(element => {
      if (isInViewport(document.getElementById(element)))
        setActiveNav(element)
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <button onClick={() => redirect('header')} className={activeNav === 'header' ? 'active' : ''}><AiOutlineHome /></button>
      <button onClick={() => redirect('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></button>
      <button onClick={() => redirect('qualifications')} className={activeNav === 'qualifications' ? 'active' : ''}><BiBook /></button>
      <button onClick={() => redirect('skills')} className={activeNav === 'skills' ? 'active' : ''}><BsFileCode /></button>
      <button onClick={() => redirect('projects')} className={activeNav === 'projects' ? 'active' : ''}><SiCodeproject /></button>
      <button onClick={() => redirect('contact')} className={activeNav === 'contact' ? 'active' : ''}><BiMessageSquareDetail /></button>
    </nav>
  )
}

export default Nav
