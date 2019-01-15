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
  }

  componentDidMount() {
    let cssColor = '';
    let className = ' seatFree ';
    let disabledButton = false;


    const filters = this.props.mapping.filter(stmp => ((stmp.rowId === this.props.rowId) && (stmp.colId === this.props.colId)));


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
        style={{ background: this.state.cssColor }}
        className={`seatBtn ${this.state.className}`}
      />


    );
  }
}

export default Seat;
