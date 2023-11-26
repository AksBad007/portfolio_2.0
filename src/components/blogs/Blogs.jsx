import { useState, useEffect } from 'react'
import Heading from '../common/Heading'
import SwiperSlider from '../common/SwiperSlider'
import { query } from '../common/data'
import './Blogs.css'

const Blogs = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    url: '',
    posts: [],
  })

  const fetchPosts = async () => {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    const ApiResponse = await response.json()

    const { publication: { title, url, posts: { edges } } } = ApiResponse.data
    setBlogData({
      title,
      url,
      posts: edges.map(({ node }) => node)
    })
  }

  const blogs = blogData.posts.map(({ title, url, seo: { description }, coverImage }) => (
    <>
      <div className='project__item-image'>
        <img src={ coverImage.url } alt='Blog Cover' />
      </div>

      <h3>{ title }</h3>

      <p>{ description }</p>

      <div className='project__item-cta'>
        <a href={ url } className='btn btn-primary' target='_blank' rel='noreferrer' aria-label='Read more'>Read more</a>
      </div>
    </>
  ))

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <section id='blogs'>
      <Heading intro='My Latest Blogs' main={blogData.title} />

      <div className='blogs__container'>
        <SwiperSlider
          swiperClass='projects__container'
          itemClass='project__item'
          minWidth={ 700 }
          content={ blogs }
        />

        <a href={ blogData.url } className='btn btn-primary' target='_blank' rel='noreferrer' aria-label='View all'>View all</a>
      </div>
    </section>
  )
}

export default Blogs