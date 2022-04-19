import { IconButton, Menu } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoMovie from '../../assets/images/logocam.png'
import './navBar.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

function navBar() {
   const [anchoE1, setAnchoE1] = useState(null)
  return (
    <div className="fullnavbar">
      <nav className="navbar navbarHome navbar-expand-sm navbar-dark">
      <Link className="navbar-brand" to="/">
          <img className="logoWeb" src={logoMovie} alt="logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              Phim
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
             
            >
              Phim đang chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              Ứng dụng
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link_lienhe" >
              Liên hệ
            </a>
          </li>
        </ul>
        <div className="account">
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <PersonOutlineIcon className="buttonAccount" />
          </IconButton>
          <Menu
          id="menu-appbar"
          >
          </Menu>
        </div>
      </nav>
    </div>
  )
}

export default navBar