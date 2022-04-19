import React from 'react';
import NavBar from '../../components/navBar/navBar'
import movieRun from '../../funtions/pageBookingMovie/components/movierun/movieRun'
import './pageBookingMovie.css';



function pageBookingMovie() {
    return (
        <div className="fullpage">
                <NavBar></NavBar>
        </div>
    );
}

export default pageBookingMovie;