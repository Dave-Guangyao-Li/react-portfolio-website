import './Resume.scss'
import React from 'react'

function Resume() {
  const style = { width: '100%', height: '100%' }

  return (
    <div className='resume' id='resume'>
      <iframe
        style={style}
        title='resume'
        src='https://drive.google.com/file/d/1a_3osX4vYaK6EZGVuI1wqsqLETniA1cR/preview'
        width='640'
        height='480'
        allow='autoplay'
      ></iframe>
    </div>
  )
}

export default Resume
