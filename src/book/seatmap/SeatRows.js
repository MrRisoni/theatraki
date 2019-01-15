import React from 'react';
import Seat from './Seat';

const SeatRows = (props) => {

    let seats = [1,2,3,4,5,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20].map(col => {
       return (<Seat rowId={props.rowId} colId={col}/>);
    });

    return (
        <div className="SeatRows">
            <div className="row">
                <div className="col-12">

                    {seats}
            </div>

        </div>
</div>
    )
};

export default SeatRows;
