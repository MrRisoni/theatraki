import React, { Component } from 'react';
import axios from 'axios';
import SeatMap from './seatmap/SeatMap';
import SpectatorList from './people/SpectatorList';
import Contact from './people/Contact';
import Payment from './people/Payment';
import PriceBox from './PriceBox';
import ZonePricing from './ZonePricing';

class BookSpectacle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapping: [],
      fetched: false,
      zones: [],
      zonesFetched: false,
      performanceDetails: {},
      takenSeats: [],
      spectatorsList: [
        {
          id: 0,
          humanId: 1,
          type: 'ADT',
          seat: '',
          tktNo: '',
          active: true,
          price: 0,
          selectedForSeat: true,
        },
      ],
    };

    this.addSpectator = this.addSpectator.bind(this);
  }

  addSpectator() {
    let lastActiveHumanId = 0;
    this.state.spectatorsList.forEach((px) => {
      if (px.active === true) {
        lastActiveHumanId++;
      }
    });
    lastActiveHumanId++;

    const spectatesList = this.state.spectatorsList;

    spectatesList.push({
      id: this.state.spectatorsList.length,
      humanId: lastActiveHumanId,
      active: true,
      type: 'ADT',
      seat: '',
      tktNo: '',
      price: 0,
      selectedForSeat: false,
    });

    this.setState({
      spectatorsList: spectatesList,
    });
  }


  componentDidMount() {
    const self = this;
    console.log(process.ENV);
    axios.all([
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/seatmap`),
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/performance`),
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/seats`),
    ]).then(axios.spread((seatMap, perform, taken) => {
      self.setState({
        mapping: seatMap.data,
        fetched: true,
        performanceDetails: perform.data,
        takenSeats: taken.data,
      });
    })).catch((err) => {
      console.log(err);

      console.log(err);
    });
  }

  render() {
    console.log('env');
    console.log(process.env);
    return (
      <section>


        {this.state.fetched
                && <SeatMap mapping={this.state.mapping} takenSeats={this.state.takenSeats} />
                 }

        {this.state.fetched
                    && <ZonePricing zones={this.state.performanceDetails.pricesList} />
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
                  <button
                    className="btn btn-sm btn-dark btn-block btnToggle"
data-toggle="collapse"
                    data-target="#spectatorsCollapse"
aria-expanded="false"
                    aria-controls="collapseExample"
                  >
<span>Toggle</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>


        <SpectatorList spectatorsList={this.state.spectatorsList} />


        <div className="row">
          <div className="col-4 offset-4">
            <button className="btn btn-primary btn-success" id="addSpectButt">
              <span>Add Spectator</span>
            </button>
          </div>
        </div>


        <Contact />

        <Payment />

        <PriceBox />


      </section>

    );
  }
}

export default BookSpectacle;
