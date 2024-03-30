import { useState, useEffect } from 'react'
import Heading from '../common/Heading'
import SwiperSlider from '../common/SwiperSlider'
import { query } from '../common/data'
import './Blogs.css'

const Blogs = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    slug: '',
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

    const { publication: { title, slug, posts: { edges } } } = ApiResponse.data
    setBlogData({
      title,
      slug,
      posts: edges.map(({ node }) => node)
    })
  }

  const blogs = blogData.posts.map(({ slug, seo: { title, description }, coverImage: { url } }) => (
    <>
      <div className='project__item-image'>
        <img src={ url } alt='Blog Cover' loading='lazy' />
      </div>

      <h3>{ title }</h3>

      <p>{ description }</p>

      <div className='project__item-cta'>
        <a href={ "/blog/" + slug } className='btn btn-primary' target='_blank' rel='noreferrer' aria-label='Read more'>
          Read more
        </a>
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
          content={ blogs }
        />

        <a href="/blog" className='btn btn-primary' target='_blank' rel='noreferrer' aria-label='View all'>View all</a>
      </div>
    </section>
  )
}

export default Blogs
