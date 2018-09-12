import React, { Component } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Pulse from './Components/Pulse';



class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      pulses: this.props.initialData
    }

  //this.handleStatusChange = this.handleStatusChange.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleAdd=this.handleAdd.bind(this);
  this.nextId= this.nextId.bind(this);
  this.handleEdit = this.handleEdit.bind(this);

  }

  nextId(){
    this._nextId= this._nextId || 4;
    return this._nextId++;
  }

  handleAdd(date,upperPressure,lowerPressure,pulso,health){
    let pulse = {
        id: this.nextId(),
        date,
        upperPressure,
        lowerPressure,
        pulso,
        health
    };

    let pulses = [...this.state.pulses, pulse];
    this.setState({pulses});
  }

  handleDelete(id) {
    let pulses = this.state.pulses.filter(pulse => pulse.id !==id);
    this.setState({pulses:pulses});
  }

  handleEdit(id, date, upperPressure, lowerPressure, pulso, health){

    let pulses = this.state.pulses.map( pulse => {
        if (pulse.id === id) {
            pulse.date = date;
            pulse.upperPressure = upperPressure;
            pulse.lowerPressure = lowerPressure;
            pulse.pulso = pulso;
            pulse.health = health;
        }
        return pulse;
    });
    this.setState({pulses});
  }

  render() {
    return (
        <main>
            <Header title={this.props.title} subtitle ={this.props.subtitle}  />
      
            <Form onAdd={this.handleAdd}/>

            <section className="pulses-list">
                    {this.state.pulses.map(pulses =>
                        <Pulse 
                            key={pulses.id} 
                            id={pulses.id}
                            date={pulses.date} 
                            upperPressure={pulses.upperPressure} 
                            lowerPressure={pulses.lowerPressure} 
                            pulso={pulses.pulso} 
                            health={pulses.health} 
                            //onStatusChange={this.handleStatusChange} 
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />)}
                </section>

        </main>
    );
  }
}


export default App;
