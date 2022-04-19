import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './pageBookingMovie.css';
import movieRun from './components/movieRun/movieRun';



function pageBookingMovie() {
    return (
        <div className="fullpage">
                <NavBar></NavBar>
                <movieRun></movieRun>
        </div>
    );
}

export default pageBookingMovie;