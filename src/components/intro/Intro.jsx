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
      strings: [
        'Full-stack Web Development',
        'Data Science',
        'Machine Learning',
      ],
      backDelay: 100,
      backSpeed: 60,
      showCursor: true,
    })
  }, [])
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='img-container'>
          <img src='assets/profile-pic.jpg' alt='profile-pic' />
        </div>
      </div>

      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Guangyao Li</h1>
          <h3>
            {/* animated span using ityped */}
            Focused fields: <span ref={textRef}></span>
          </h3>
          <div className='self-intro'>
            <p>
              I have both analytical and programming skills. I enjoy developing
              Web apps especially writing front-end code with JavaScript and
              React. In addition, I'm very excited about the emerging Web3
              Decentralized technologies which I think would have the potential
              to lead to a more equitable society. I'm also interested in Data
              Science and Machine Learning. I'm currently looking for a
              full-time position as a Software Engineer.
            </p>
          </div>
        </div>

        <a href='#portfolio'>
          <img src='assets/down.png' alt='down-arrow-pic' />
        </a>
      </div>
    </div>
  )
}
