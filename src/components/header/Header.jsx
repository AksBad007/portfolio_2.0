import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import Heading from '../common/Heading'
import Resume from '../../assets/resume-Akshat Arora.pdf'
import ME from '../../assets/profile.jpg'
import './Header.css'

const Header = () => {
  return (
    <header className='container header__container'>
      <Heading intro="Hello I'm" main="Akshat Arora"/>

      <h5 className="text-light">FullStack Developer/Data Scientist</h5>

      <div className='cta'>
          <a href={Resume} download className='btn'>Download Resume</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

      <div className='header__socials'>
        <a href="https://www.linkedin.com/in/akshat-arora-007/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/AksBad007" target="_blank"><FaGithub /></a>
      </div>

      <div className="me">
        <img src={ME} alt="my profile pic" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header
