import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './pageBookingMovie.css';
import movierun from './components/movierun/movieRun';



function pageBookingMovie(props) {
    


    return (
        <div className="fullpage">
            <div className="fullslide">
                <NavBar setUser={props.setUserState}></NavBar>
                <movierun></movierun>
            </div>
        </div>
        
    );
}

export default pageBookingMovie;