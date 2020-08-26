import React, { Component } from 'react';
import SeatButton from './SeatButton';

class FloorLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <section>

        <section id="seatFloor">

          {this.props.seatArray.map((seatItem) => {
            const color = `#${this.props.zones.filter(zn => zn.id === seatItem.zoneId)[0].cssColor}`;
            const zoneName = this.props.zones.filter(zn => zn.id === seatItem.zoneId)[0].title;

            return (
              <SeatButton
                key={seatItem.id}
                rowId={seatItem.rowId}
                colId={seatItem.colId}
                seatName={seatItem.seatName}
                zoneName={zoneName}
                zoneId={seatItem.zoneId}
                top={seatItem.top}
                left={seatItem.left}
                color={color}
                pricing={this.props.pricing}
                selectedSpecType={this.props.selectedSpecType}
                selectedSeats={this.props.selectedSeats}
                updateSeat={this.props.updateSeat}
                takenSeats={this.props.takenSeats}
              />
            );
          })}
        </section>

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
export default FloorLayout;
