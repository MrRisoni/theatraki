import React, {Component} from 'react';
import axios from 'axios';
import SeatButton from "./SeatButton";

class FloorLayout extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            seatArray: [],
            fetched:false,
            zones:[],
        }
    }

    componentDidMount()
    {
        const self = this;
        console.log('sat floor');
       axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/seatfloor/1`).then(rsp => {
           console.log(rsp.data);
            self.setState({
                seatArray:rsp.data.seats,
                zones: rsp.data.zones,
                fetched:true
            })
       }).catch(err => {
           console.log(err);
       })

    }
    render() {


        console.log('zone data');
        console.log(this.state.zones);

        return (

            <section>
                {this.state.fetched &&

                <section id="seatFloor">

                    {this.state.seatArray.map(seatItem => {
                        console.log('--------------');

                        console.log('zoneitem zine ' + seatItem.zoneId);
                        console.log(this.state.zones.filter(zn => zn.id == seatItem.zoneId));


                        let  color = '#'+ this.state.zones.filter(zn => zn.id == seatItem.zoneId)[0].cssColor;


                       return ( <SeatButton
                            key={seatItem.id}
                            rowId={seatItem.rowId}
                            colId={seatItem.colId}
                            seatName={seatItem.seatName}
                            zoneId={seatItem.zoneId}
                            top={seatItem.top}
                            left={seatItem.left}
                            color={color}
                            pricing={this.props.pricing}
                            selectedSpecType={this.props.selectedSpecType}
                            selectedSeats={this.props.selectedSeats}
                            updateSeat={this.props.updateSeat}
                            takenSeats={this.props.takenSeats} />
                        )


                    })}
                </section>
                }

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

export default FloorLayout;



