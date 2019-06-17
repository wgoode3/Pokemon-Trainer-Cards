import React, { Component } from 'react';
import { trainers } from './sprites';

class TrainerPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            this.props.selected(trainers[i]);
            this.toggle(); 
        });
    }

    render() {
        return (
        <>
        {
            this.state.selection === -1 ?
            <button type="button" onClick={this.toggle}>Select Trainer</button> :
            <button type="button" onClick={this.toggle}>Change Trainer</button>
        }
        <div className="modal" onClick={this.toggle} style={{visibility: this.state.visible}}></div>
        <div className="search" style={{visibility: this.state.visible}}>
            <div className="title-bar">
            <h3>Select a Portrait</h3>
            <a href="#!" className="close" onClick={this.toggle}>&times;</a>
            </div>
            <div className="search-main">
            {
                trainers.map( (t, i) => 
                <img key={i} src={t.img} alt={t.name} className="" onClick={this.select.bind(this, i)} />
                )
            }
            </div>
        </div>
        </>
        );
    }
}

export default TrainerPicker;