import Heading from '../common/Heading'
import SwiperSlider from '../common/SwiperSlider'
import { projectsData } from '../common/data'
import './Projects.css'

const Projects = () => {
  const projectItems = projectsData.map(({ imgSrc, title, desc, github, demo }) => (
    <>
      <div className='project__item-image'>
        <img src={ imgSrc } alt='Project Preview' loading='lazy' />
      </div>

      <h3>{ title }</h3>

      <p>{ desc }</p>

      <div className='project__item-cta'>
        { github && <a href={ github } className='btn' target='_blank' rel='noreferrer' aria-label='Source Code'>Source Code</a> }
        { demo && <a href={ demo } className='btn btn-primary' target='_blank' rel='noreferrer' aria-label='Visit'>Visit</a> }
      </div>
    </>
  ))

  return (
    <section id='projects'>
      <Heading intro='My Recent Work' main='Portfolio'/>

      <SwiperSlider
        swiperClass='projects__container'
        itemClass='project__item'
        content={ projectItems }
      />
    </section>
  )
}

export default Projects
