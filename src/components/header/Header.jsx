import Heading from '../common/Heading'
import { headerSocials, redirect } from '../common/data'
import Resume from '../../assets/resume-Akshat Arora.pdf'
import ME from '../../assets/profile.jpg'
import './Header.css'

const Header = () => {
  return (
    <header id='header' className='container header__container'>
      <Heading intro="Hello I'm" main="Akshat Arora"/>

      <h5 className="text-light">FullStack Developer/Data Scientist</h5>

      <div className='cta'>
          <a href={ Resume } download='Resume-Akshat Arora' className='btn'>Download Resume</a>
          <button onClick={() => redirect('contact')} className='btn btn-primary'>Let's Talk</button>
      </div>

      <div className='header__socials'>
        {
          headerSocials.map(({ link, icon }, id) => (
            <a key={ id } href={ link } target="_blank" rel='noreferrer'>{ icon }</a>
          ))
        }
      </div>

      <div className="me">
        <img src={ ME } alt="my profile pic" />
      </div>

      <button onClick={() => redirect('about')} className='scroll__down'>Scroll Down</button>
    </header>
  )
}

export default Header
