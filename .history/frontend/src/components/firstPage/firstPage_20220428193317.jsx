import React, { useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logocam.png'
import './firstPage.css'
import {emailGet} from './firstPageCall'
import { useHistory } from 'react-router'
import {useDispatch} from 'react-redux'



function FirstPage() {
    const history = useHistory()
    const [email,setEmail]=useState('')
    const dispatch = useDispatch()

    const getEmail =(event)=>{
        setEmail(event.target.value)
    }
    const getEmailSubmit =()=>{
    }
    const getClickButton=()=>{
    const direct = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/; 
    if(direct.test(email)){
      const action = emailGet(email)
      dispatch(action)
      history.push("/dangky")
    }else if(email!==''){
      alert("email không hợp lệ")
    }
   }
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
                            <label className="pagelabel" placeholder='email'>
                                <ValidatorForm className="login-form">
                                <TextValidator className="formtext"/>
                                <button className="signinPage">
                                     <a className="signinPage--a">Đăng ký
                                     <i className="fas fa-chevron-right" />
                                    </a>
                                    </button>
                                    
                                </ValidatorForm>
                            </label>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default FirstPage