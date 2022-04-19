import React from 'react';
import NavBar from '../../components/navBar/navBar'

import './pageBookingMovie.css';



function pageBookingMovie() {
    return (
        <div className="fullpage">
                <NavBar></NavBar>
                <movieRun></movieRun>
        </div>
    );
}

export default pageBookingMovie;