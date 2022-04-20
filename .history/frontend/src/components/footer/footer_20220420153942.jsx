import React from 'react'
import './footer.css'
import logo from "../../assets/images/logocam.png"
function Footer() {
  return (
    <div className="container">
        <div className="row">
            <div className="footer_tops d-flex justify-content-around ">
                  <div className="">
                  <div className="footer_top-content">Điều khoản sử dụng</div>
                  <ul className="footer_top-ul">
                    <li className="footer_top-li">
                      <a className="footer_top-a">
                      Điều khoản chung
                      </a>
                    </li>
                    <li className="footer_top-li">
                      <a className="footer_top-a">
                      Điều khoản sử dụng
                      </a>
                    </li>
                    <li className="footer_top-li">
                      <a className="footer_top-a">
                      Chính sách thanh toán
                      </a>
                    </li>
                    <li className="footer_top-li"> 
                      <a className="footer_top-a">
                      Câu hỏi thường gặp
                      </a>
                    </li>
                  </ul>
                  </div>
                  <div className="">
                  <div className="footer_top-content">Danh mục</div>
                  <ul className="footer_top-ul">
                    <li className="footer_top-li">
                      <a className="footer_top-a">
                      Phim
                      </a>
                    </li>
                    <li className="footer_top-li">
                      <a className="footer_top-a">
                      Phim đang chiếu
                      </a>
                    </li>
                    <li className="footer_top-li">
                      <a className="footer_top-a">
                      Tin tức
                      </a>
                    </li>
                    <li className="footer_top-li"> 
                      <a className="footer_top-a">
                      Ứng dụng
                      </a>
                    </li>
                  </ul>
                  </div>
                  <div className="">
                  <div className="footer_top-content">Đối tác</div>
                      <div className="footer_top-partners">
                        <div className="footer_top-partner visa" />
                        <div className="footer_top-partner jcb" />
                        <div className="footer_top-partner ghn" />
                        <div className="footer_top-partner ninja" />
                        <div className="footer_top-partner airPay" />
                        <div className="footer_top-partner shoppePay" />
                      </div>
                  </div>
                  <div className="footer-top footer-end ">
                      <div className="footer_top-logo">
                      <img src={logo} alt="" />
                      </div>
                      <div className="footer_top-socials">
                        <div className=''>

                        </div>
                      </div>
                  </div>
            </div>
        </div>
    </div>


  )
}

export default Footer