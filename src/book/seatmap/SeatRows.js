import React from 'react';
import lodash from 'lodash';
import Seat from './Seat';

const SeatRows = (props) => {
  const colsArray = lodash.range(1, 65);

  const seats = colsArray.map(col => (
    <Seat
      rowId={props.rowId}
      colId={col}
      spectatorsList={props.spectatorsList}
      selectedSeats={props.selectedSeats}
      updateSeat={props.updateSeat}
      takenSeats={props.takenSeats}
      mapping={props.mapping}
    />
  ));

  return (

    <div className="SeatRows">
      <div className="row">
        <div className="col-12">

          {seats}
        </div>

      </div>
    </div>
  );
};

export default SeatRows;
