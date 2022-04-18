import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './pageBookingMovie.css';
import moviRun from './components/movieRun/movieRun';



function pageBookingMovie(props) {
    


    return (
        <div className="fullpage">
            <div className="fullslide">
                <NavBar setUser={props.setUserState}></NavBar>
                <moviRun></moviRun>
            </div>
        </div>
        
    );
}

export default pageBookingMovie;