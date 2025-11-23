import { Link } from 'react-router-dom'

import React from 'react'

const NavBar = () => {
  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/update-user">Update</Link>
        </li>
        <li class="nav-item">
          <Link to="/delete-user">Delete</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar