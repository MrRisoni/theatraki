import React, { Component } from 'react';
import './seat.css';

class Seat extends Component {
  constructor(props) {
    super(props);

    this.clickSeat = this.clickSeat.bind(this);
    this.decideSeatAttrs = this.decideSeatAttrs.bind(this);
  }

  clickSeat() {
    this.props.updateSeat(this.props.rowId, this.props.colId);


  }


  decideSeatAttrs() {
    let cssColor = '';
    let className = ' seatFree ';
    let disabledButton = false;


    const filters = this.props.filters;
    console.log('this.props.selectedSeats');

    console.log(this.props.spectatorsList);

    if (filters.length === 0) {
      cssColor = '#ffff';
      className = '';
      disabledButton = true;
      // console.log('not exists');
    } else {
      cssColor = `#${filters[0].zoneInfo.css}`;

      if (this.props.takenSeats.indexOf(filters[0].seatName) > -1) {
        disabledButton = true;
        className = ' seatNotAvailable ';
        cssColor = '#888888';
      }
      if (this.props.selectedSeats.indexOf(filters[0].seatName) > -1) {
        className = ' seatChosen ';
      }


      // or selected by existing booking
    }

    return { cssColor, disabledButton, className };
  }

  render() {
    const attributes = this.decideSeatAttrs();

    return (

      <button
        disabled={attributes.disabledButton}
        type="button"
        onClick={this.clickSeat}
        style={{ background: attributes.cssColor }}
        className={`seatBtn ${attributes.className}`}
      />


    );
  }
}

export default Seat;
