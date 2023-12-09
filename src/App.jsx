import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Qualifications from './components/qualifications/Qualifications'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollUp/ScrollUp'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Qualifications />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      <ScrollUp />
      <SpeedInsights />
    </>
  )
}

export default App
