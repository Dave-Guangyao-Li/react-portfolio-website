import PortfolioList from '../portfolioList/PortfolioList'
import './Portfolio.scss'
import { useState, useEffect } from 'react'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([]) // set portfolio data

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
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
    {
      id: 'other',
      title: 'Other',
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
          <div className='item'>
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
