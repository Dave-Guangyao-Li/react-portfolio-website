import './Menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#intro'>Intro</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#works'>Works</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href='#portfolio'>Portfolios</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href='#resume'>Resume</a>
        </li>

        {/* <li onClick={() => setMenuOpen(false)}>
          <a href='#testimonials'>Testimonials</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}
