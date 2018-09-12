import React from 'react';
import PropTypes from "prop-types";
import Button from './Button';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state={};
        this.hendleSubmit = this.hendleSubmit.bind(this);
    }

    hendleSubmit(event){
        event.preventDefault();
        let date = this.refs.date.value;
        let upperPressure = this.refs.upperPressure.value;
        let lowerPressure = this.refs.lowerPressure.value;
        let pulso = this.refs.pulso.value;
        let health = this.refs.health.value;
        if (date) {
            // add new pulse line
            this.props.onAdd(date,upperPressure,lowerPressure,pulso,health);

            // clear form filds
            this.refs.date.value = '';
            this.refs.upperPressure.value = 0;
            this.refs.lowerPressure.value = 0;
            this.refs.pulso.value = 0;
            this.refs.health.value = 0;
        }  
        //console.log("!!! "+this.refs.title.value);
    }

    render() {
        return (
            <form className="pulse-form" onSubmit={this.hendleSubmit} > 
                <input type="date" min={'2018-01-01'} max={'2025-12-31'} ref="date" placeholder="Дата" />
                <input type="number" max={300} ref="upperPressure" placeholder="Верхнее давление"/>
                <input type="number" max={200} ref="lowerPressure" placeholder="Нижнее давление" />
                <input type="number" max={200} ref="pulso" placeholder="Пульс" />
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