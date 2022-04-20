import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './pageBookingMovie.css';
import MovieRun from './components/movieRun/movieRun';
import Footer from '../../components/footer/footer';



function pageBookingMovie() {
    return (
        <div className="fullpage">
            <div className="fullslide">
                <NavBar></NavBar>
                <MovieRun></MovieRun>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
          
        </div>
        
    );
}

export default pageBookingMovie;