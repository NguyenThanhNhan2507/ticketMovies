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
                        <Link to='/'>
                            Trang chủ
                        </Link>
                        <Typography>Phim</Typography>
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentPage