import React from 'react'
import "./contact.css"
function Contact() {
  return (
    <div className="contact">
        <div className="contact_title">
             Nhận các thông báo khuyến mãi , giảm giá về email của bạn .
        </div>
        <div className="contact_form">
            <form>
                    <input type="text" className="form-control" placeholder="Nhập email của bạn " id="enter-email"></input>
                    <button type="submit" className="contact_form-submit"></button>
            </form>
        </div>
    </div>
  )
}

export default Contact