import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './pageBookingMovie.css';
import MovieRun from './components/movieRun/movieRun';



function pageBookingMovie() {
    return (
        <div className="fullpage">
                <NavBar></NavBar>
                <MovieRun></MovieRun>
        </div>
    );
}

export default pageBookingMovie;