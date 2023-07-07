import React from 'react'
import './Header.css'
import userIcon from '../../imgs/user.png'
import rtLogo from '../../imgs/RT.svg.png'

function Header() {
  return (
    <header>
      <img className='rt-logo' src={rtLogo} alt='a tomato with the intials RT inside'/>
      <nav>
        <a className='all-movies-link'>All movies</a>
        <div className='user-wrap'>
          <img className='login-img' alt='login icon of a person' src={userIcon}/>
          <span>Log In</span>
        </div>
      </nav>
    </header>
  )
}

export default Header