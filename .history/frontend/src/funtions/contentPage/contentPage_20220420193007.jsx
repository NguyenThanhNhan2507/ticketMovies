import { Breadcrumbs, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navBar/navBar'
import logo from '../../assets/images/logocam.png'
import './contentPage.css'
import Footer from '../../components/footer/footer'
function ContentPage() {
  return (
    <div className="fullpage contentPage">
                <NavBar></NavBar>
                <div className="pageShowContent">
                    <div className="container">
                        <div className="pageShowContent-home">
                            <Breadcrumbs aria-label="breadcrumb" className="pageShowContent-home">
                                <Link class="linkhomepage" color="inherit" to="/" >
                                    Trang chủ
                                </Link>
                                <Typography>Phim </Typography>
                            </Breadcrumbs>
                        </div>
                        <div className="detailPage--first row">
                            <div className="detailPage--first__img col-md-4 col-lg-4">
                                <img alt="" />
                            </div>
                        </div>
                        <div className="contentpage-list row">
                        <div className="col-md-6 col-lg-6 d-flex justify-content-between flex-column">
                            <div className="">
                                <div className="contentpage--info-title">Nội dung</div>
                            </div>
                            <div className="detailPage--info__casts">
                                <div className="contentpage--info-title">Diễn viên</div>
                                <div className="contentpage-list-caster">
                                    <div className="contentpage-list-caster-image">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div className="">Thành Nhân</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="">
                                <div className="contentpage--info-title">Chi tiết</div>
                                <div className="contentpage-list-detail">
                                    <div className="contentpage-list-detail-left">Đạo diễn</div>
                                    <div className="contentpage-list-detail-right">Michal Cồ</div>
                                </div>
                                <div className="contentpage-list-detail">
                                    <div className="contentpage-list-detail-left">Quốc gia</div>
                                    <div className="contentpage-list-detail-right">Việt Nam</div>
                                </div>
                                <div className="contentpage-list-detail">
                                    <div className="contentpage-list-detail-left">Thể loại</div>
                                    <div className="contentpage-list-detail-right">Hành động-hài hước-tâm lý</div>
                                </div>
                                <div className="contentpage-list-detail">
                                    <div className="contentpage-list-detail-left">Khởi chiếu</div>
                                    <div className="contentpage-list-detail-right"></div>
                                </div>
                                <div className="contentpage-list-detail">
                                    <div className="contentpage-list-detail-left">Thời lượng</div>
                                    <div className="contentpage-list-detail-right">110 phút</div>
                                </div>
                                <div className="contentpage-list-detail">
                                    <div className="contentpage-list-detail-left">Độ tuổi</div>
                                    <div className="contentpage-list-detail-right">18+</div>
                                </div>
                                <div className="contentpage-list-detail">
                                    <div className="contentpage-list-detail-left">Đánh giá</div>
                                    <div className="contentpage-list-detail-right">/10</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
      </div>
  )
}

export default ContentPage