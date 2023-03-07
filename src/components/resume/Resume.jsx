import './Resume.scss'
import React from 'react'

function Resume() {
  const style = { width: '100%', height: '100%' }

  return (
    <div className='resume' id='resume'>
      <iframe
        style={style}
        title='resume'
        src='https://drive.google.com/file/d/1W51ixnbJGYEvTrVH1AXFzUKdiF1bP2tk/preview'
        width='640'
        height='480'
        allow='autoplay'
      ></iframe>
    </div>
  )
}

export default Resume
