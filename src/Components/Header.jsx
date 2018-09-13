import React from "react";
import PropTypes from "prop-types";
//import Stats from './stats'; 
//import Stopwatch from './Stopwatch';


function Header (props) {
    return (
        <header>
            
            <h1>{props.title}</h1> 
            
            <h2>{props.subtitle}</h2>
            
        </header> 
    );  
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,

}

export default Header;