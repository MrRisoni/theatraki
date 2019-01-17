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
    this.updateSeat = this.updateSeat.bind(this);
  }


  updateSeat(rowId,colId)
  {
      const seatName = this.state.mapping.filter(stmp => ((stmp.rowId === rowId) && (stmp.colId === colId)))[0].seatName;
      console.log('picked ' + seatName);
      let spectList = this.state.spectatorsList;
      let spect = spectList.filter(sp => sp.selectedForSeat === true)[0];
      spect.seat = seatName;


      this.setState({
          spectatorsList : spectList,
      })


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

    const selectedSeats = this.state.spectatorsList.filter(spl => spl.active === true).map(actSpl => actSpl.seat);



      return (
      <section>


        {this.state.fetched
                && <SeatMap spectatorsList={this.state.spectatorsList}
                             mapping={this.state.mapping}
                            selectedSeats={selectedSeats}
                            takenSeats={this.state.takenSeats}
                            updateSeat={this.updateSeat}/>
                 }

        {this.state.fetched
                    && <ZonePricing zones={this.state.performanceDetails.pricesList} />
                }



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
