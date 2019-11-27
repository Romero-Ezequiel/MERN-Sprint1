import React from 'react';
import {Link} from 'react-router-dom'
import logo from './img/flecha.png';
import '../App.css';

class Section extends React.Component{
    render() {
        return(
            <div className="Section">
                <p>
                Find you perfect trip, designed by insiders who know and love their cities.
                </p>
                <h2>
                Start Browsing
                </h2>
                <Link to={'./cities'}>
                <img src={logo} className="App-logo" />
                </Link>
            </div>
        );

    }
}

export default Section;