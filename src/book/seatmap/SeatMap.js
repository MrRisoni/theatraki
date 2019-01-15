import React, {Component} from 'react';
import SeatRows from './SeatRows';

class SeatMap extends Component {
    render() {
        const rows = [1,2,3,4,5,6,7,8,9,10]

        return (
            <section>

                {rows.map(idx => {
                    return ( <SeatRows rowId={idx}/>)
                })}


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


