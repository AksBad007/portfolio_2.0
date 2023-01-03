import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import './Projects.css'
import 'swiper/css'
import 'swiper/css/pagination'

const projectsData = [
  {
    id: 1,
    title: 'Project K.I.S.S. - Keep It Simple Stupid',
    github: "https://github.com/AksBad007/Project-K.I.S.S.",
    demo: "http://project-k-i-s-s-aksbad007.vercel.app/"
  },
  {
    id: 2,
    title: 'Chatter-Type',
    github: "https://github.com/AksBad007/chatter-type",
    demo: "http://chatter-type.vercel.app/"
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

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