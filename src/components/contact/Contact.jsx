import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlinePhone } from 'react-icons/hi'
import Heading from '../common/Heading'
import './Contact.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_6t5z5ki', 'template_gu80mie', form.current, 'ixqj2fFFbP7ogPqgj')
      // .then((result) => {
      //   console.log(result.text)
      // }, (error) => {
      //   console.log(error.text)
      // });

    e.target.reset();
  }

  return (
    <section id="contact">
      <Heading intro="Get In Touch" main="Contact Me"/>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon' />
            <h4>Email</h4>
            <h5>arora.akshat007@gmail.com</h5>
            <a href="mailto:arora.akshat007@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <HiOutlinePhone className='.contact__option-icon' />
            <h4>Phone</h4>
            <h5>+7888688879</h5>
            <a href="tel:+7888688879">Contact Me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your Full Name' required />
          <input type="email" name="email" id="" placeholder='Your Email' required />
          <textarea name="message" rows='7'  id="" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
