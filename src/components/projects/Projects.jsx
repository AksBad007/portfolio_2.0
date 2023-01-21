import { projectsData } from '../common/data'
import Heading from '../common/Heading';
import SwiperSlider from '../common/SwiperSlider';
import './Projects.css'

const Projects = () => {
  const projectItems = projectsData.map(({ title, desc, github, demo }) => (
    <>
      <h3>{ title }</h3>
      <p>{ desc }</p>
      <div className="project__item-cta">
        <a href={ github } className="btn" target='_blank' rel="noreferrer">GitHub</a>
        { demo && <a href={ demo } className="btn btn-primary" target='_blank' rel="noreferrer">Demo</a> }
      </div>
    </>
  ))

  return (
    <section id="projects">
      <Heading intro="My Recent Work" main="Projects"/>

      <SwiperSlider
        swiperClass='projects__container'
        itemClass='project__item'
        minWidth={ 700 }
        content={ projectItems }
      />
    </section>
  )
}

export default Projects
