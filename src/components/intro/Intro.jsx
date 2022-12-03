import { useEffect, useRef } from 'react'
import './Intro.scss'
import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef() // useRef is a hook that allows us to access the DOM just like document.querySelector

  useEffect(() => {
    // console.log(textRef): object.current
    // initialize item
    init(textRef.current, {
      showCursor: false,
      strings: ['Developer', 'Designer', 'Content Creator'],
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
    })
  }, [])
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='img-container'>
          <img src='assets/man.png' alt='profile-pic' />
        </div>
      </div>

      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>John Doe</h1>
          <h3>
            {/* animated span using ityped */}
            Freelance <span ref={textRef}></span>
          </h3>
        </div>

        <a href='#portfolio'>
          <img src='assets/down.png' alt='down-arrow-pic' />
        </a>
      </div>
    </div>
  )
}
