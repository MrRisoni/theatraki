import React from 'react';
import lodash from 'lodash';
import Seat from './Seat';

const SeatRows = (props) => {
  const colsArray = lodash.range(1, 65);
  let keyId = '';
  let seatName = '';
  let zoneId = 0;
  let css = '';

  return (
    <div className="row">
      <div className="SeatRows">
        <div className="row">
          <div className="col-12">

            {colsArray.map((col) => {
              seatName = '';
              zoneId = 0;
              css = '';
              keyId = `keySeat${props.rowId}_${col}`;
              if (typeof props.mapping[props.rowId] !== 'undefined') {
                if (typeof props.mapping[props.rowId][col] !== 'undefined') {
                  const seatData = props.mapping[props.rowId][col];
                  seatName = seatData.seatName;
                  zoneId = seatData.zoneId;
                  css = seatData.zoneCss;
                }
              }


              return (
                <Seat
                  key={keyId}
                  rowId={props.rowId}
                  colId={col}
                  seatName={seatName}
                  zoneId={zoneId}
                  css={css}
                  spectatorsList={props.spectatorsList}
                  selectedSeats={props.selectedSeats}
                  updateSeat={props.updateSeat}
                  takenSeats={props.takenSeats}
                />
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SeatRows;
