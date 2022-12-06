import './Works.scss'
import { workData } from '../../workData'
import { useState } from 'react'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (direction) => {
    direction === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < workData.length - 1 ? currentSlide + 1 : 0
        )
  }

  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }} // move slider to the left
      >
        {workData.map((d) => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src={d.icon} alt={d.title} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className='right'>
                <img src='assets/mobile.png' alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src='assets/arrow.png'
        className='arrow left'
        alt=''
        onClick={() => {
          handleClick('left')
        }}
      />
      <img
        src='assets/arrow.png'
        className='arrow right'
        alt=''
        onClick={() => {
          handleClick('right')
        }}
      />
    </div>
  )
}
