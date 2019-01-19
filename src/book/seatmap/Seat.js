import React, { Component } from 'react';
import '../styles/seat.css';

class Seat extends Component {
  constructor(props) {
    super(props);

    this.clickSeat = this.clickSeat.bind(this);
    this.decideSeatAttrs = this.decideSeatAttrs.bind(this);
  }

  clickSeat() {
    console.log(this.props);
    this.props.updateSeat(this.props.seatName, this.props.zoneId);
  }


  decideSeatAttrs() {
    let cssColor = '';
    let className = ' seatFree ';
    let disabledButton = false;


    if (this.props.seatName === '') {
      cssColor = '#ffff';
      className = '';
      disabledButton = true;
    } else {
      // check if this seat is supported by the current selected spectator type
      const priceExists = this.props.pricing.filter(pr => pr.typ.title === this.props.selectedSpecType && pr.zone.id === this.props.zoneId).length > 0;
      if (priceExists === true) {
        cssColor = `#${this.props.css}`;

        if (this.props.takenSeats) {
            if (this.props.takenSeats.indexOf(this.props.seatName) > -1) {
                disabledButton = true;
                className = ' seatNotAvailable ';
                cssColor = '#888888';
            }
        }

        if (this.props.selectedSeats.indexOf(this.props.seatName) > -1) {
          cssColor = 'yellow';
          className = ' seatChosen ';
        }
      } else {
        console.log('not supported ');
        cssColor = '';
        disabledButton = true;
        className = ' seatNotSupported ';
      }
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
