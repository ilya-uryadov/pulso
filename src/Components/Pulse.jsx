import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
//import { CSSTransitionGroup } from 'react-transition-group';

class Pulse extends React.Component{
    constructor (props){
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            editing:false 
            //editing:true 
        };
    }

    /*componentDidUpdate(prevProps,prevState){
        if (this.state.editing) {
            this.refs.title.focus();
            this.refs.title.select();
        }

    }

    handleSubmit(event){
        event.preventDefault();
        let title = this.refs.title.value;
        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false})
    }  
    */

    renderDisplay(){
        return(
            <div className={'pulse'}>
                <span className="pulse-date">{this.props.date}</span>
                <span className="pulse-upperPressure">upper: {this.props.upperPressure}</span>
                <span className="pulse-lowerPressure">lower: {this.props.lowerPressure}</span>
                <span className="pulse-pulse">pulse: {this.props.pulse}</span>
                <span className="pulse-health">{this.props.health}</span>
                <Button className="edit icon" icon="edit" onClick={() => this.setState({ editing:true})}/>
                <Button className={"delete icon"} icon={'delete'} onClick={() => this.props.onDelete(this.props.id)} />
            </div>

        );
    }

    renderForm(){
        return(
            <form className="pulse-edit-form" onSubmit={this.handleSubmit}>
                <input type="date" ref="date" defaultValue={this.props.date} />
                <input type="number" ref="upperPressure" defaultValue={this.props.upperPressure} />
                <input type="number" ref="lowerPressure" defaultValue={this.props.lowerPressure} />
                <input type="number" ref="pulse" defaultValue={this.props.pulse} />
                <input type="number" ref="health" defaultValue={this.props.health} />
                
                <Button className="save icon" icon="save" type="submit" onClick={this.handleSubmit}/>
            </form>
            
        );
    }

    render(){

        return this.state.editing ? this.renderForm() : this.renderDisplay(); 
       

    }
}

Pulse.propTypes = {
    date: PropTypes.date,
    upperPressure: PropTypes.number.isRequired,
    lowerPressure: PropTypes.number.isRequired,
    pulse: PropTypes.number.isRequired,
    health: PropTypes.number.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default Pulse;





    