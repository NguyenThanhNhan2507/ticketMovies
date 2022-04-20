import { Breadcrumbs, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navBar/navBar'
import './contentPage.css'
function ContentPage() {
  return (
    <div className="fullpage contentPage">
        <NavBar></NavBar>
        <div className="pageShowContent">
            <div className="header">
                <div className="pageShowContent-home">
                    <Breadcrumbs>
                        <Link to='/' className="linkhomepage">
                            Trang chủ
                        </Link>
                        <Typography>Phim</Typography>
                    </Breadcrumbs>
                </div>
                <div className="contentpage-list row">
                    <div className="col-md-6 col-lg-6 d-flex justify-content-between flex-column">
                        <div>
                            <div>Nội dung</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentPage