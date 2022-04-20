import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './pageBookingMovie.css';
import MovieRun from './components/movieRun/movieRun';
import Footer from '../../components/footer/footer';
import Contact from '../../components/contact/contact';
import PageListMovie from '../../components/pageListMovie/pageListMovie';


function pageBookingMovie() {
    return (
        <div className="fullpage">
            <div className="fullslide">
                <NavBar></NavBar>
                <MovieRun></MovieRun>
            </div>
                <PageListMovie></PageListMovie>
            <div className="footer">
                <Contact></Contact>
                <Footer></Footer>
            </div>
          
        </div>
        
    );
}

export default pageBookingMovie;