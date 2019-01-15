import React, {Component} from 'react';
import SeatRows from './SeatRows';
import lodash from 'lodash';
import './seatmap.css';


class SeatMap extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        const rows =  lodash.range(1,25)

        return (
            <section>

                {rows.map(idx => {
                    return (<div className="row"><SeatRows
                        mapping={this.props.mapping}
                        rowId={idx}/></div>)
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


