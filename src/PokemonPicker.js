import React, { Component } from 'react';
import { pokemon } from './sprites';

class PokemonPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemon,
      search: "",
      filter: pokemon,
      active: false,
      selection: -1,
      visible: "hidden"
    }
  }

  toggle = () => {
    if(!this.state.active) {
      this.setState({
        active: true,
        visible: "visible"
      });
    } else {
      this.setState({
        active: false,
        visible: "hidden"
      });
    }
  }

  select = (i) => {
    this.setState({selection: i}, () => { 
      this.props.selected(this.state.filter[i], this.props.index);
      this.toggle(); 
    });
  }

  search = (e) => {
    let pokes = [...pokemon];
    pokes = pokes.filter(p => p.name.toLowerCase().includes(e.target.value));
    this.setState({
      search: e.target.value,
      filter: pokes
    });
  }

  render() {
    return (
      <>
        {
            this.state.selection === -1 ?
            <button type="button" onClick={this.toggle}>Select Pokemon</button> :
            <button type="button" onClick={this.toggle}>Change {this.state.filter[this.state.selection].name}</button>
        }
        <div className="modal" onClick={this.toggle} style={{visibility: this.state.visible}}></div>
        <div className="search" style={{visibility: this.state.visible}}>
          <div className="title-bar">
            <h3>Select a Pokemon</h3>
            <span>
              <input type="search" className="search-input" onChange={this.search} placeholder="search" />
              <a href="#!" className="close" onClick={this.toggle}>&times;</a>
            </span>
          </div>
          <div className="search-main">
            {
                this.state.filter.map( (p, i) => 
                <img key={i} src={p.img} alt={p.name} className="smaller" onClick={this.select.bind(this, i)} />
                )
            }
          </div>
        </div>
      </>
    );
  }
}

export default PokemonPicker;