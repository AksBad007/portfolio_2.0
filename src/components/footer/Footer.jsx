import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoDiscord } from 'react-icons/io5'
import { redirect } from '../common/data'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <button onClick={() => redirect('header')} className='footer__logo'>Akshat Arora</button>

      <ul className="permalinks">
        <li><button onClick={() => redirect('header')}>Home</button></li>
        <li><button onClick={() => redirect('about')}>About Me</button></li>
        <li><button onClick={() => redirect('qualifications')}>Qualifications</button></li>
        <li><button onClick={() => redirect('skills')}>Skills</button></li>
        <li><button onClick={() => redirect('projects')}>Projects</button></li>
        <li><button onClick={() => redirect('contact')}>Contact Me</button></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/akshat_bad_007/" target="_blank"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/akshat-arora-007/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.discordapp.com/users/Akshat#4299/" target="_blank"><IoLogoDiscord /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; { new Date().getFullYear() } Made with ❤️ by <a href='https://github.com/AksBad007' target='_blank'>Akshat Arora</a></small>
      </div>
    </footer>
  )
}

export default Footer
