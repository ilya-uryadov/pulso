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
            <form className="todo-form" onSubmit={this.hendleSubmit} > 
                <input type="date" ref="date" placeholder="Дата" />
                <input type="number" ref="upperPressure" placeholder="Верхнее давление" />
                <input type="number" ref="lowerPressure" placeholder="Нижнее давление" />
                <input type="number" ref="pulse" placeholder="Пульс" />
                <input type="number" ref="health" placeholder="Оценка состояния" />
                <Button type="submit"> Add values </Button>
            </form>
         )
    }
}

    Form.propTypes = {
        onAdd: PropTypes.func.isRequired
    
    };
    
    export default Form;