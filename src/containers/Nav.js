import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color:'#fff',
    textDecoration: 'none',
  }

  return (
    <nav>
      <h1 className="logo">Fake Shop</h1>
      <ul className="nav-list">
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav