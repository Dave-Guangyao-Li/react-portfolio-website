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
              I'm a developer with experience in HTML, CSS, JavaScript, React,
              and SQL, as well as backend development using the Django framework
              and Java SSM framework. I'm proficient in Python and have worked
              on data engineering tasks using scientific computing libraries.
              I've developed and optimized data pipelines, resulting in a 25%
              increase in prediction accuracy, and have experience with cloud
              platform services like Azure and AWS. In my free time, I enjoy
              teaching myself new programming languages and participating in
              hackathons and online coding challenges. I'm especially interested
              in learning new technologies related to full-stack web
              development, big data, and blockchain, and I'm excited to continue
              growing my skills as an engineer and analytical thinker. I'm
              currently looking for a full-time position as a Software Engineer
              or Data Engineer.
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
