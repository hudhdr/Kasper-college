import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/college.png'
import menu_icon from '../../assets/assets/menu-icon.png'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu((open) => !open)
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  return (
    <nav className="container dark-nav">
      <img src={logo} alt="Kasper College logo" className="logo" />
      <ul className={mobileMenu ? 'mobile-menu-open' : 'hide-mobile-menu'}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/student" onClick={closeMenu}>Student</NavLink></li>
        <li><NavLink to="/business" onClick={closeMenu}>Business</NavLink></li>
      </ul>
      <button
        type="button"
        className={`menu-icon${mobileMenu ? ' menu-icon-open' : ''}`}
        onClick={toggleMenu}
        aria-label={mobileMenu ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileMenu}
      >
        <img src={menu_icon} alt="" />
      </button>
    </nav>
  )
}

export default Navbar