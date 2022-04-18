import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './pageBookingMovie.css';
import MovieRun from "./components/movierun/movieRun"



function pageBookingMovie(props) {
    


    return (
        <div className="fullpage">
            <div className="fullslide">
                <NavBar setUser={props.setUserState}></NavBar>
                <MovieRun></MovieRun>
            </div>
        </div>
        
    );
}

export default pageBookingMovie;