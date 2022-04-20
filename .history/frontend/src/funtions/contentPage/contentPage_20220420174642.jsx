import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navBar/navBar'

function ContentPage() {
  return (
    <div className="fullpage contentPage">
        <NavBar></NavBar>
        <div className="pageShowContent">
            <div className="">
                <div className="pageShowContent-home">
                    <Breadcrumbs>
                        <Link>

                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentPage