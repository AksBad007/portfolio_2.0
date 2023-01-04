import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoDiscord } from 'react-icons/io5'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Akshat Arora</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/akshat_bad_007/" target="_blank"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/akshat-arora-007/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.discordapp.com/users/Akshat#4299/" target="_blank"><IoLogoDiscord /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Made with ❤️ by Akshat Arora</small>
      </div>
    </footer>
  )
}

export default Footer
