import React, {Component} from 'react';

class FloorLayout extends Component {
    render() {

        const pStyle = {
            height: '700px'
        };

        const seatI = {
            top: '656px',
            'background-color' : 'red',
            position: 'absolute'
        }

        const seatII = {
            top: '645px',
            left :'150px',
            'background-color' : 'red',
            position: 'absolute'
        }

        return (
            <div style={pStyle}> Component FloorLayout


                     <button type="button" style={seatI} className="floorSeat"></button>
                <button type="button" style={seatII} className="floorSeat"></button>

            </div>

        );
    }
}

export default FloorLayout;


