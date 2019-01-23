import React, { Component } from 'react';
import '../styles/seat.css';

class SeatButton extends Component {
  constructor(props) {
    super(props);

    this.clickSeat = this.clickSeat.bind(this);
    this.decideSeatAttrs = this.decideSeatAttrs.bind(this);
  }

  clickSeat() {
    console.log(this.props);
    console.log('click span');
    this.props.updateSeat(this.props.seatName, this.props.zoneId);
  }


  decideSeatAttrs() {
    let cssColor = this.props.color;
    let className = ' seatFree ';
    let disabledButton = false;


    // check if this seat is supported by the current selected spectator type


    const priceExists = this.props.pricing.filter(pr => pr.typ.title === this.props.selectedSpecType && pr.zone.id == this.props.zoneId).length > 0;
    if (priceExists === true) {
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
      cssColor = '';
      disabledButton = true;
      className = ' seatNotSupported ';
    }


    return { cssColor, disabledButton, className };
  }

  render() {
    const attributes = this.decideSeatAttrs();

    const seatItemStyle = {
      top: this.props.top,
      left: this.props.left,
      backgroundColor: attributes.cssColor,
      position: 'absolute',
    };

    return (

      <span
        data-zoneid={this.props.zoneId}
        data-id={this.props.key}
        onClick={this.clickSeat}
        style={seatItemStyle}
        data-toggle="tooltip" data-placement="top" title={this.props.zoneName}
        className={`floorSeatButton ${attributes.className}`}
      />


    );
  }
}

export default SeatButton;
