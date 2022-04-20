import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './pageBookingMovie.css';
import MovieRun from './components/movieRun/movieRun';
import Footer from '../../components/footer/footer';



function pageBookingMovie() {
    return (
        <div className="fullpage">
                <NavBar></NavBar>
                <MovieRun></MovieRun>
                <div className="footer">
                <Footer></Footer>
                </div>
        </div>
    );
}

export default pageBookingMovie;