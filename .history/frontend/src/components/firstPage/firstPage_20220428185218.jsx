import React from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
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
                <section className="content d-flex flex-column justify-content-center">
                    <div className="content-title">
                    <p>Website đặt vé xem phim , cập nhật đầy đủ các bộ phim hot, giá vé , rạp chiếu và các ưu đãi</p>
                    <p>dành cho bạn.</p>
                    <small> Hãy theo dõi chúng tôi để nhận những ưu đãi mỗi ngày.</small>
                    </div>
                </section>
                <div className="content-form">
                    <div className="content-form__input">
                            <label className="label" placeholder='email'>
                                <ValidatorForm className="login-form"/>
                                <button className="signinPage">
                                     <a className="signinPage--a">Đăng ký
                                     <i className="fas fa-chevron-right" />
                                    </a>
                                    </button>
                               
                            </label>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default firstPage