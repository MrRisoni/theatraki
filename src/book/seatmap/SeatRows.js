import React from 'react';
import lodash from 'lodash';
import Seat from './Seat';

const SeatRows = (props) => {
    const colsArray = lodash.range(1, 65);
    let keyId = '';
    let filteredData = '';
    let seatName = '';
    let zoneId = 0;

    return (
        <div className="row">
            <div className="SeatRows">
                <div className="row">
                    <div className="col-12">

                        {colsArray.map(col => {
                            keyId = 'keySeat' + props.rowId + '_' + col;
                            filteredData = props.mapping.filter(stmp => ((stmp.rowId === props.rowId) && (stmp.colId === col)));
                            if (filteredData.length >0) {
                                seatName = filteredData[0].seatName;
                                zoneId = filteredData[0].zoneInfo.id;
                            }
                            return (
                                <Seat
                                    key={keyId}
                                    rowId={props.rowId}
                                    colId={col}
                                    seatName={seatName}
                                    zoneId={zoneId}
                                    filters={filteredData}
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
