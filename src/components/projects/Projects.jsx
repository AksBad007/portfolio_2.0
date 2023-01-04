import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { projectsData } from '../common/data'
import Heading from '../common/Heading';
import './Projects.css'
import 'swiper/css'
import 'swiper/css/pagination'

const Projects = () => {
  return (
    <section id="projects">
      <Heading intro="My Recent Work" main="Projects"/>

      <Swiper
        modules={[ Pagination ]}
        spaceBetween={ 40 }
        slidesPerView={ 2 }
        navigation
        pagination={{ clickable: true }}
        className="container projects__container"
      >
        {
          projectsData.map(({ id, title, github, demo }) => (
            <SwiperSlide key={ id } className="project__item">
              <h3>{ title }</h3>
              <div className="project__item-cta">
                <a href={ github } className="btn" target='_blank'>GitHub</a>
                <a href={ demo } className="btn btn-primary" target='_blank'>Demo</a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Projects
