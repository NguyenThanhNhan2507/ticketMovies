import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logocam.png'
import './firstPage.css'
function firstPage() {
  return (
    <div className="page">
        <div className="backgroundColor"></div>
            <div className="container">
                <section>
                    <nav className="navbar navbar-expand-sm">
                        <a className="navbar-logo">
                            <img className="logo" src={logo} alt="logo"/>
                        </a>
                        <Link className="navbar-link">
                            <button className="login">
                                <a className='login--a'>Đăng Nhập</a>
                            </button>
                        </Link>
                    </nav>
                </section>
        </div>
    </div>
  )
}

export default firstPage