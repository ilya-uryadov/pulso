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
                            pulse={pulses.pulse} 
                            health={pulses.health} 
                            onStatusChange={this.handleStatusChange} 
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />)}
                </section>

        </main>
    );
  }
}


export default App;
