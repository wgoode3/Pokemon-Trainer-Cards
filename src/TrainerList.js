import React, { Component } from 'react';
import TrainerCard from './TrainerCard';

class TrainerList extends Component {
  render() {
    return (
      <>
        <h1>List of Trainers</h1>
        {
          this.props.trainers.map( (t,i) => 
           <TrainerCard t={t} key={i} />
          )
        }
      </>
    );
  }
}

export default TrainerList;