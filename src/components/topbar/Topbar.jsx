import './Topbar.scss'
import { Person, Mail } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        {/* logo, number ,email, hamburger menu */}
        <div className='left'>
          <a href='#intro' className='logo'>
            My Portfolio
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+1 341-766-9659</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>dave_guangyao_li@outlook.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
