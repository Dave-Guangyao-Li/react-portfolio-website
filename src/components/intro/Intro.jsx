import './Intro.scss'

export default function Intro() {
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
            Developer<span></span>
          </h3>
        </div>

        <a href='#portfolio'>
          <img src='assets/down.png' alt='down-arrow-pic' />
        </a>
      </div>
    </div>
  )
}
