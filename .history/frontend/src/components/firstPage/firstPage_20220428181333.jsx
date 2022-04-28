import React from 'react'
import logo from '../../assets/images/logocam.png'
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
                    </nav>
                </section>
        </div>
    </div>
  )
}

export default firstPage