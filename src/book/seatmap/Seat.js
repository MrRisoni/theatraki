import React, { Component } from 'react';
import './seat.css';

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: '',
      cssColor: '',
      disabledButton: false,
    };

    this.clickSeat = this.clickSeat.bind(this);
  }

  clickSeat() {
    this.props.updateSeat(this.props.rowId, this.props.colId);
  }

  componentDidMount() {
    let cssColor = '';
    let className = ' seatFree ';
    let disabledButton = false;


    const filters = this.props.mapping.filter(stmp => ((stmp.rowId === this.props.rowId) && (stmp.colId === this.props.colId)));
      console.log('this.props.selectedSeats');

    console.log(this.props.spectatorsList);

    if (filters.length === 0) {
      cssColor = 'ffff';
      className = '';
      disabledButton = true;
      // console.log('not exists');
    } else {
      cssColor = filters[0].zoneInfo.css;

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


    this.setState({
      cssColor: `#${cssColor}`,
      disabledButton,
      className,
    });
  }

  render() {
    return (

      <button
        disabled={this.state.disabledButton}
        type="button"
        onClick={this.clickSeat}
        style={{ background: this.state.cssColor }}
        className={`seatBtn ${this.state.className}`}
      />


    );
  }
}

export default Seat;
