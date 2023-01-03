import CTA from './CTA'
import ME from '../../assets/profile.jpg'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  return (
    <header className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Akshat Arora</h1>
      <h5 className="text-light">FullStack Developer/Data Scientist</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="my profile pic" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header