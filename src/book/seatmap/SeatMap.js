import React, { Component } from 'react';
import lodash from 'lodash';
import SeatRows from './SeatRows';
import './seatmap.css';


class SeatMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = lodash.range(1, 25);

    return (
      <section>

        {rows.map(idx => (
          <div className="row">
            <SeatRows
              selectedSeats={this.props.selectedSeats}
              spectatorsList={this.props.spectatorsList}
              updateSeat={this.props.updateSeat}
              takenSeats={this.props.takenSeats}
              mapping={this.props.mapping}
              rowId={idx}
            />
          </div>
        ))}


        <div className="row stageDiv">
          <div className="col-6 offset-2">
            <div className="alert alert-dark" role="alert">


                    Stage
            </div>
          </div>
        </div>


      </section>

    );
  }
}

export default SeatMap;
