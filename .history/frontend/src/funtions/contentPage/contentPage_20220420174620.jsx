import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import NavBar from '../../components/navBar/navBar'

function ContentPage() {
  return (
    <div className="fullpage contentPage">
        <NavBar></NavBar>
        <div className="pageShowContent">
            <div className="">
                <div className="pageShowContent-home">
                    <Breadcrumbs>
                        
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentPage