import React, { Component } from 'react';
import lodash from 'lodash';
import SeatRows from './SeatRows';
import './seatmap.css';


class SeatMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = lodash.range(1, this.props.maxRows );
console.log('seatmap ');
console.log(rows);
    return (
      <section>

        {rows.map(idx => (

            <SeatRows
                key={`keySeatRpw${idx}`}
              selectedSeats={this.props.selectedSeats}
              spectatorsList={this.props.spectatorsList}
              updateSeat={this.props.updateSeat}
              takenSeats={this.props.takenSeats}
                maxCols={this.props.maxCols}
                selectedSpecType={this.props.selectedSpecType}
                pricing={this.props.pricing}
                mapping={this.props.mapping}
              rowId={idx}
            />

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
