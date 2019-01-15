import React, {Component} from 'react';
import axios from 'axios';
import SeatMap from "./seatmap/SeatMap";
import SpectatorList from "./people/SpectatorList";
import Contact from './people/Contact';
import Payment from './people/Payment';
import PriceBox from './PriceBox';

class BookSpectacle extends Component {
    constructor(props) {
        super(props);
        this.state = { mapping:[], fetched:false,
            spectatorsList: [
                {
                    id: 0,
                    humanId: 1,
                    type: 'ADT',
                    seat: '',
                    tktNo: '',
                    active: true,
                    price:0,
                    selectedForSeat: true,
                },
            ]}
    }

    componentDidMount()
    {
        const self = this;
        axios.get('http://localhost:8080/api/seatmap').then(rsp => {
            console.log(rsp.data);
            self.setState({
                mapping:rsp.data,
                fetched:true
            })

        }).catch((err) => {
            console.log(err);

          //  this.$store.commit('mapError',err);

        });

    }
    render() {

        console.log('env');
        console.log(process.env);
        return (
            <section> Component BookSpectacle




                {this.state.fetched  &&
                    <SeatMap mapping={this.state.mapping}/>
                 }


                <div className="row">
                    <div className="col-8 offset-1">

                        <div className="alert alert-primary" role="alert" id="spectatorAlert">
                            <div className="row">
                                <div className="col-5">
                                    <button type="button" className="btn btn-danger">Clear Spectators</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-warning">Reset Seats</button>
                                </div>

                                <div className="col-2">
                                    <button className="btn btn-sm btn-dark btn-block btnToggle" data-toggle="collapse"
                                            data-target="#spectatorsCollapse" aria-expanded="false"
                                            aria-controls="collapseExample"><span>Toggle</span></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <SpectatorList spectatorsList={this.state.spectatorsList}/>


                <div className="row">
                    <div className="col-4 offset-4">
                        <button className="btn btn-primary btn-success" id="addSpectButt">
                            <span>Add Spectator</span></button>
                    </div>
                </div>



                <Contact></Contact>

                <Payment></Payment>

                <PriceBox></PriceBox>



            </section>

        );
    }
}

export default BookSpectacle;


