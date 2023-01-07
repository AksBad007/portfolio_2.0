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
          skillsData.map(({ domain, skills }, idx) => (
            <div key={ idx }>
              <h3>{ domain }</h3>
              <div className="skills__content">
                {
                  skills.map(({ name, lvl }, idx) => (
                    <article key={ idx } className="skills__details">
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
