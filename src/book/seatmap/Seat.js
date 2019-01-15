import React, {Component} from 'react';
import './seat.css';

class Seat extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            className:'',
            cssColor:'',
        }
    }
    componentDidMount()
    {
        let  seatChosen = false;
        let seatFree = true;
        let seatNotAvailable = false;

        let cssColor = '';


        const filters = this.props.mapping.filter(stmp => ((stmp.rowId === this.rowId) && (stmp.colId === this.colId)));
        if (filters.length === 0) {
            cssColor = 'ffff';
            seatFree = false;
        } else {

            // if taken??

            const min = 1;
            const max = 100;
            const r = Math.random() * (max - min) + min;
            cssColor = filters[0].zoneInfo.css;

            if (r > 70) {
                seatNotAvailable = true;
                seatFree = false;
                cssColor = '#888888';
            }
        }



        this.setState({
            cssColor:cssColor
        })
    }
    render() {

        console.log(this.props);
        return (

                <button type="button"  className={`seatBtn ${this.state.className}`} />





        );
    }
}

export default Seat;


