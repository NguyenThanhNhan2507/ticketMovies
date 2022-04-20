import { Breadcrumbs, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navBar/navBar'
import logo from '../../assets/images/logocam.png'
import './contentPage.css'
function ContentPage() {
  return (
    <div className="fullpage contentPage">
        <NavBar></NavBar>
        <div className="pageShowContent">
            <div className="container">
                <div className="pageShowContent-home">
                    <Breadcrumbs className="pageShowContent-home" >
                        <Link to='/' className="linkhomepage">
                            Trang chủ
                        </Link>
                        <Typography>Phim</Typography>
                    </Breadcrumbs>
                </div>
                <div className="contentpage-list row">
                    <div className="col-md-6 col-lg-6 d-flex justify-content-between flex-column">
                        <div className="contentpage-list--content">
                            <div className="contentpage-list-title">Nội dung</div>
                        </div>
                        <div className="detailPage-list-casts">
                                <div className="contentpage-list-title">Diễn viên</div>
                                <div className="contentpage-list-caster">
                                    <div className="contentpage-list-caster-image">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div className="contentpage-list-caster-name">Thành Nhân</div>
                                </div>
                            </div>
                         </div>
                     <div className="col-md-6 col-lg-6">
                        
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentPage