import { useState, useEffect } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const SwiperSlider = ({ content, swiperClass = '', itemClass = '', minWidth = 700 }) => {
  const [slidesPerView, updateSlidesPerView] = useState(2)

  useEffect(() => {
    const visibleSliders = () => (window.innerWidth <= minWidth) ? updateSlidesPerView(1) : updateSlidesPerView(2)

    visibleSliders()

    window.addEventListener('resize', visibleSliders)

    return () => window.removeEventListener('resize', visibleSliders)
  }, [ minWidth ])

  return (
    <Swiper
      className={ 'container ' + swiperClass }
      modules={[ Pagination ]}
      spaceBetween={ 40 }
      slidesPerView={ slidesPerView }
      pagination={{ clickable: true }}
      navigation
      lazy
    >
      {
        content.map((element, id) => (
          <SwiperSlide key={ id } className={ itemClass }>
            { element }
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SwiperSlider
