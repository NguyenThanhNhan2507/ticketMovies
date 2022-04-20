import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className="container">
        <div className="row">
            <div className="footer_tops d-flex justify-content-around ">
                  <div className="footer_top col-lg-3 col-md-3">
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
            </div>
        </div>
    </div>
  )
}

export default Footer