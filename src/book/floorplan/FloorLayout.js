import React, {Component} from 'react';
const  seatfloor = require('./seatfloor.json');

class FloorLayout extends Component {
    render() {

        const pStyle = {
            height: '700px'
        };

        const seatI = {
            top: '656px',
            'backgroundColor' : 'red',
            position: 'absolute'
        }

        console.log(seatfloor)

        return (
            <section id="seatFloor">
            new Seatmap
                {seatfloor.map(seatItem => {

                        let  seatItemStyle = {
                                    top:  seatItem.top,
                                    left: seatItem.left,
                                    'backgroundColor' : 'red',
                                    position: 'absolute'
                                }
                                           
                    return ( <button key={seatItem.id} type="button" style={seatItemStyle}
                       className="floorSeatButton"></button>)
                })}




            </section>

        );
    }
}

export default FloorLayout;


