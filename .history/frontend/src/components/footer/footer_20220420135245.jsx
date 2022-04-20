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
                    <li>
                      <a>
                      Điều khoản chung
                      </a>
                    </li>
                    <li>
                      <a>
                      Điều khoản sử dụng
                      </a>
                    </li>
                    <li>
                      <a>
                      Chính sách thanh toán
                      </a>
                    </li>
                    <li>
                      <a>
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