import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './pageBookingMovie.css';
import movieRun from './components/movieRun/movieRun';



function BookingMoviePage(props) {
    


    return (
        <div className="fullpage">
            <div className="fullslide">
                <NavBar setUser={props.setUserState}></NavBar>
                <movieRun></movieRun>
            </div>
        </div>
        
    );
}

export default BookingMoviePage;