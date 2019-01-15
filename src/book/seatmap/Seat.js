import React, { Component } from 'react';
import './seat.css';

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: '',
      cssColor: '',
    };
  }

  componentDidMount() {
    const seatChosen = false;
    let seatFree = true;
    let seatNotAvailable = false;

    let cssColor = '';


    const filters = this.props.mapping.filter(stmp => ((stmp.rowId == this.props.rowId) && (stmp.colId == this.props.colId)));
    //  console.log('seat '  + this.props.rowId + ' ' + this.props.colId);

    // console.log(filters);

    if (filters.length === 0) {
      cssColor = 'ffff';
      seatFree = false;
      // console.log('not exists');
    } else {
      // if taken??

      const min = 1;
      const max = 100;
      const r = Math.random() * (max - min) + min;
      cssColor = filters[0].zoneInfo.css;

      if (r > 70) {
        seatNotAvailable = true;
        seatFree = false;
        cssColor = '#888888';
      }
    }


    this.setState({
      cssColor: `#${cssColor}`,
    });
  }

  render() {
    return (

      <button
        type="button"
        style={{ background: this.state.cssColor }}
        className={`seatBtn ${this.state.className}`}
      />


    );
  }
}

export default Seat;
