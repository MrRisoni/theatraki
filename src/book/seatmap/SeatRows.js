import React from 'react';
import lodash from 'lodash';
import Seat from './Seat';

const SeatRows = (props) => {
    const colsArray = lodash.range(1, 65);

    return (
        <div className="row">
            <div className="SeatRows">
                <div className="row">
                    <div className="col-12">

                        {colsArray.map(col => {
                            let keyId = 'keySeat' + props.rowId + '_' + col;
                            return (
                                <Seat
                                    key={keyId}
                                    rowId={props.rowId}
                                    colId={col}
                                    spectatorsList={props.spectatorsList}
                                    selectedSeats={props.selectedSeats}
                                    updateSeat={props.updateSeat}
                                    takenSeats={props.takenSeats}
                                    mapping={props.mapping}
                                />)
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SeatRows;
