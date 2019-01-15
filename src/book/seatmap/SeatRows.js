import React from 'react';
import Seat from './Seat';
import lodash from "lodash";

const SeatRows = (props) => {

    const colsArray =  lodash.range(1,65)

    let seats = colsArray.map(col => {
       return (<Seat rowId={props.rowId} colId={col} mapping={props.mapping}/>);
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
