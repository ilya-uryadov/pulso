import React from 'react';
import PropTypes from "prop-types";
import Button from './Button';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state={};
        //this.hendleSubmit = this.hendleSubmit.bind(this);
    }

    render() {
        return (
            <form className="pulse-form" onSubmit={this.hendleSubmit} > 
                <input type="date" min={'2018-01-01'} max={'2035-12-31'} ref="date" placeholder="Дата" />
                <input type="number" size={10} max={300} ref="upperPressure" placeholder="Верхнее давление"/>
                <input type="number" max={200} ref="lowerPressure" placeholder="Нижнее давление" />
                <input type="number" max={200} ref="pulse" placeholder="Пульс" />
                <input type="number" max={3} min={1} ref="health" placeholder="Оценка состояния" />
                <Button type="submit"> Add values </Button>
            </form>
         )
    }
}

    Form.propTypes = {
        onAdd: PropTypes.func.isRequired
    
    };
    
    export default Form;