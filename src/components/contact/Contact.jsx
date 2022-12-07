import './Contact.scss'
import { useState } from 'react'
import { send } from 'emailjs-com' // emailjs is a library that allows us to send email from the front-end, without using backend, we can use it to send email to me

export default function Contact() {
  const [message, setMessage] = useState(false)

  // to send email to me
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Guangyao Li',
    message: '',
    reply_to: '',
  })

  // get the serviceID, templateID, userID from .env file in the root directory, and then use them to send email
  const serviceID = process.env.REACT_APP_SERVICE_ID
  const templateID = process.env.REACT_APP_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const handleSubmit = (e) => {
    // emailjs.send(serviceID, templateID, templateParams, publicKey);
    e.preventDefault()
    console.log(publicKey)

    send(serviceID, templateID, toSend, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setMessage(true)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
    //clear input field
    setToSend({
      from_name: '',
      to_name: 'Guangyao Li',
      message: '',
      reply_to: '',
    })
  }

  const handleChange = (e) => {
    // update the state, when user type in the input
    const { name, value } = e.target
    setToSend({ ...toSend, [name]: value })
  }

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            name='from_name'
            type='text'
            placeholder='Your Name'
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            name='reply_to'
            type='email'
            placeholder='Your Email'
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={toSend.message}
            onChange={handleChange}
          />
          <button type='submit'>Send</button>
          {message && <span>Thanks for connecting, I'll reply ASAP ;)</span>}
        </form>
        <h2>Social Platforms</h2>

        <div className='social'>
          <div className='social-linkedin'>
            <a
              href='https://www.linkedin.com/in/dave-guangyao-li'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='assets/linkedin.png' alt='linkedin' />
            </a>
          </div>
          <div className='social-twitter'>
            <a
              href='https://twitter.com/Dave_GY_Li'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='assets/twitter.png' alt='twitter' />
            </a>
          </div>
          <div className='social-github'>
            <a
              href='https://github.com/Dave-Guangyao-Li'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='assets/github-logo.png' alt='github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
