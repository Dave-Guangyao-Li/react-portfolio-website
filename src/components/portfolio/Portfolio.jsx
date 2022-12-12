import PortfolioList from '../portfolioList/PortfolioList'
import './Portfolio.scss'
import { useState, useEffect } from 'react'

import ProjectModal from '../projectModal/ProjectModal'

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from '../../data'

// add modal to show the project details

export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([]) // set portfolio data

  const [open, setOpen] = useState(false) // set modal state

  // set the state of modal to open upon clicking a card
  const handleClick = () => {
    setOpen(true)
  }

  // handle modal close event
  const handleCloseModal = () => {
    setOpen(false)
  }

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio)
        break
      case 'web':
        setData(webPortfolio)
        break
      case 'mobile':
        setData(mobilePortfolio)
        break
      case 'design':
        setData(designPortfolio)
        break
      default:
        setData(featuredPortfolio)
    }
  })

  const list = [
    {
      id: 'html-and-css',
      title: 'HTML and CSS',
    },
    {
      id: 'vanilla-js',
      title: 'Vanilla JS',
    },
    {
      id: 'responsive-design',
      title: 'Responsive Design',
    },
    {
      id: 'readct-js',
      title: 'React JS',
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
    },
  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          )
        })}
      </ul>

      <div className='container'>
        {data.map((d) => (
          <div className='item' onClick={handleClick}>
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>

            <ProjectModal
              data={data}
              open={open}
              handleCloeseModal={handleCloseModal}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
