import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import Heading from '../common/Heading'
import ME from '../../assets/profile 2.jpg'
import './About.css'

const About = () => {
  return (
    <section id="about">
      <Heading intro="Get To Know" main="About Me"/>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="my other pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Personal Projects</small>
            </article>
          </div>

          <p>
            Aspiring Data Scientist and Diligent Full-Stack Developer with experience in both
            SQL and No SQL Databases and in technologies like React.js, Node.js and Flask.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
