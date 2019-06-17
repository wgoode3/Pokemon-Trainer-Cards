import React, { Component } from 'react';
import { badges } from './sprites';

class TrainerCard extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-top">
          <h2>Trainer Card</h2>
          <h3>{this.props.t.name}</h3>
        </div>
        <div className="card-main">
          <div className="col-3-4">
            {
              this.props.t.pokemon.map( (p, i) =>
                <div className="card-poke" key={i}>
                  <img src={p.img} alt={p.name} />
                </div>
              )
            }
          </div>
          <div className="col-1-4">
            <img src={this.props.t.avatar.img} alt={this.props.t.avatar.name} className="avatar" />
          </div>
        </div>
        <div className="card-bottom">
          <h4 className="label">Badges</h4>
          <div className="icons">
            {
              badges.map( (b, i) => 
                <img src={b.img} alt={b.name} key={i} />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TrainerCard;