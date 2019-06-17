import React, { Component } from 'react';
import TrainerForm from './TrainerForm';
import TrainerList from './TrainerList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
      view: "new"
    }
  }

  addTrainer = (trainer) => {
    this.setState({
      trainers: [...this.state.trainers, trainer],
      view: "list"
    });
  }

  setView = (v) => {
    this.setState({view: v});
  }

  render(){
    return (
      <>
        {
          this.state.view === "new" ?
          <button disabled onClick={this.setView.bind(this, "new")}>Register</button> :
          <button onClick={this.setView.bind(this, "new")}>Register</button> 
        }
        {
          this.state.view === "list" ?
          <button disabled onClick={this.setView.bind(this, "list")}>Trainer List</button> :
          <button onClick={this.setView.bind(this, "list")}>Trainer List</button>          
        }
        {
          this.state.view === "new" ?
          <TrainerForm add={this.addTrainer} /> :
          ""
        }
        {
          this.state.view === "list" ?
          <TrainerList trainers={this.state.trainers} /> :
          ""
        }
      </>
    );
  }
}

export default App;