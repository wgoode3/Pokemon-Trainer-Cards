import React, { Component } from 'react';
import TrainerCard from './TrainerCard';
import TrainerPicker from './TrainerPicker';
import PokemonPicker from './PokemonPicker';

class TrainerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      newTrainer: {
        name: "",
        avatar: {name: "???", img: "???"},
        pokemon: [
          {img: "", name: ""},
          {img: "", name: ""},
          {img: "", name: ""},
          {img: "", name: ""},
          {img: "", name: ""},
          {img: "", name: ""}
        ]
      }
    }
  }

  checkValid = () => {
    if(!this.state.newTrainer.name) {
      return false;
    }
    if(this.state.newTrainer.img === "???"){
      return false;
    }
    for(let p of this.state.newTrainer.pokemon){
      if(p.img){
        return true;
      }
    }
    return false;
  }

  avatar = (a) => {
    this.setState({newTrainer: {...this.state.newTrainer, avatar: a}}, () => {
      this.setState({isValid: this.checkValid()})
    });
  }

  setName = (e) => {
    this.setState({newTrainer: {...this.state.newTrainer, name: e.target.value}}, () => {
      this.setState({isValid: this.checkValid()})
    });
  }
  
  pokepick = (p, i) => {
    let pokemon = [...this.state.newTrainer.pokemon];
    pokemon[i] = p;
    this.setState({newTrainer: {...this.state.newTrainer, pokemon: pokemon}}, () => {
      this.setState({isValid: this.checkValid()})
    });
  }

  create = (e) => {
    e.preventDefault();
    this.props.add(this.state.newTrainer);
    this.setState({newTrainer: 
      {
        name: "",
        avatar: {name: "???", img: "???"},
        pokemon: [
          {img: "", name: ""},
          {img: "", name: ""},
          {img: "", name: ""},
          {img: "", name: ""},
          {img: "", name: ""},
          {img: "", name: ""}
        ]
      }
    });
  }

  render(){
    return (
      <>
        <h1>Register for your Pokemon Card!</h1>
        <TrainerCard t={this.state.newTrainer} />
        <div className="form">
          <form onSubmit={this.create}>
            <div className="form-group">
              <label>Your Name:</label>
              <input type="text" name="name" placeholder="your name" onChange={this.setName} />
            </div>
            <div className="form-group">
              <label>Your avatar:</label>
              <TrainerPicker selected={this.avatar} />
            </div>
            <div className="form-group">
              <label>Pokemon 1:</label>
              <PokemonPicker selected={this.pokepick} index={0} />
            </div>
            <div className="form-group">
              <label>Pokemon 2:</label>
              <PokemonPicker selected={this.pokepick} index={1} />
            </div>
            <div className="form-group">
              <label>Pokemon 3:</label>
              <PokemonPicker selected={this.pokepick} index={2} />
            </div>
            <div className="form-group">
              <label>Pokemon 4:</label>
              <PokemonPicker selected={this.pokepick} index={3} />
            </div>
            <div className="form-group">
              <label>Pokemon 5:</label>
              <PokemonPicker selected={this.pokepick} index={4} />
            </div>
            <div className="form-group">
              <label>Pokemon 6:</label>
              <PokemonPicker selected={this.pokepick} index={5} />
            </div>
            {
              this.state.isValid ?
              <input type="submit" className="submit" /> :
              <input type="submit" className="submit" disabled /> 
            }
          </form>
        </div>
      </>
    );
  }
}

export default TrainerForm;