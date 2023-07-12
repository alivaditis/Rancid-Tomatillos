import React from 'react'
import './Header.css'
import userIcon from '../../imgs/user.png'
import rtLogo from '../../imgs/RT.svg.png'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="/">
        <img className='rt-logo' src={rtLogo} alt='a tomato with the intials RT inside'/>
      </Link>
      <nav>
        <div className='user-wrap'>
          <img className='login-img' alt='login icon of a person' src={userIcon}/>
          <span>Log In</span>
        </div>
      </nav>
    </header>
  )
}

export default Header