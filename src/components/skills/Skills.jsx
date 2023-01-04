import { BsPatchCheckFill } from 'react-icons/bs'
import { skillsData } from '../common/data'
import Heading from '../common/Heading'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <Heading intro="What Skills I Have" main="Skills"/>

      <div className="container skills__container">
        {
          skillsData.map(({ id, domain, skills }) => (
            <div key={ id }>
              <h3>{ domain }</h3>
              <div className="skills__content">
                {
                  skills.map(({ id, name, lvl }) => (
                    <article key={ id } className="skills__details">
                      <BsPatchCheckFill className='skills__details-icon' />
                      <div>
                        <h4>{ name }</h4>
                        <small className="text-light">{ lvl }</small>
                      </div>
                    </article>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
