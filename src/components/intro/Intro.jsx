import { useEffect, useRef } from 'react'
import './Intro.scss'
import { init } from 'ityped' // ityped is a library that allows us to create animated text

export default function Intro() {
  const textRef = useRef() // useRef is a hook that allows us to access the DOM just like document.querySelector

  useEffect(() => {
    // console.log(textRef): object.current
    // initialize item
    init(textRef.current, {
      // init is a function that takes two arguments: the DOM element and the options
      showCursor: false,
      strings: ['Developer', 'Designer', 'Content Creator'],
      backDelay: 100,
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
