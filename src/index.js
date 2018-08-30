import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PropTypes from "prop-types";
import pulses from './listOfPulses';
import registerServiceWorker from './registerServiceWorker';

App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        date:PropTypes.date,
        upperPressure:PropTypes.number.isRequired,
        lowerPressure:PropTypes.number.isRequired,
        pulse:PropTypes.number.isRequired,
        health:PropTypes.number.isRequired
    })
    ).isRequired  
    
};

App.defaultProps = {
    title: 'Blood pressure and pulse',
    subtitle: 'Ivanov Ivan Ivanovich'
};

ReactDOM.render(<App initialData={pulses} />, document.getElementById('root'));

registerServiceWorker();
