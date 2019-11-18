import React from 'react';
import MYtinerary from './img/MYtinerary.png';
import '../App.css';

class Header extends React.Component{
    render() {
        return(
            <img src={MYtinerary} className="App-title"  />
        );
    }
}

export default Header;