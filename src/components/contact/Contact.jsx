import { useState, useRef } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from 'emailjs-com'
import Heading from '../common/Heading'
import Loader from '../common/Loader'
import { contactDetails } from '../common/data'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.css'

const Contact = () => {
  const [loadingState, setLoadingState] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setLoadingState(true)

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAIL_USER_ID
    )
      .then(() => {
        toast.info('Thanks for reaching out 😃.', { icon: false })
        e.target.reset()
      }, () => {
        toast.error('Something Went Wrong!!!.')
      })

      setLoadingState(false)
  }

  return (
    <section id='contact'>
      <Heading intro='Get In Touch' main='Contact Me' />

      <div className='container contact__container'>
        <div className='contact__options'>
          {
            contactDetails.map(({icon, type, label, link}, idx) => (
              <article key={idx} className='contact__option'>
                { icon }
                <h4>{ type }</h4>
                <h5>{ label }</h5>
                <a href={ link.url }>{ link.text }</a>
              </article>
            ))
          }
        </div>

        <form ref={ form } onSubmit={ sendEmail }>
          <input type='text' name='name' placeholder='Your Full Name' disabled={ loadingState } required />
          <input type='email' name='email' placeholder='Your Email' disabled={ loadingState } required />
          <textarea name='message' rows='7' placeholder='Your Message' disabled={ loadingState } required></textarea>
          <button type='submit' className='btn btn-primary' disabled={ loadingState }>
            Send Message
            { loadingState ? <Loader className='contact__option-send-icon' /> : <RiSendPlaneFill className='contact__option-send-icon' /> }
          </button>
        </form>
      </div>

      <ToastContainer
        position='top-right'
        hideProgressBar
        newestOnTop
        pauseOnFocusLoss
        theme='colored'
      />
    </section>
  )
}

export default Contact
