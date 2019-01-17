import React, { Component } from 'react';
import axios from 'axios';
import SeatMap from './seatmap/SeatMap';
import SpectatorList from './people/SpectatorList';
import Contact from './people/Contact';
import Payment from './people/Payment';
import PriceBox from './PriceBox';
import ZonePricing from './ZonePricing';
import {
  get_onlyChildSpects,
  get_selectedSpectType,
  get_selectedSeats,
  get_spectatorCount,
} from './helpers';

import './styles/bookspectacle.css';

class BookSpectacle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapping: [],
      fetched: false,
      zones: [],
      performanceDetails: {},
      takenSeats: [],
      spectatorsList: [
        {
          id: 0,
          humanId: 1,
          type: 'ADT',
          seat: '',
          tktNo: '',
          zoneId: 0,
          active: true,
          price: 0,
          selectedForSeat: true,
        },
      ],
    };

    this.addSpectator = this.addSpectator.bind(this);
    this.updateSeat = this.updateSeat.bind(this);
    this.pickSeat = this.pickSeat.bind(this);
    this.removeSpect = this.removeSpect.bind(this);
    this.changeSpectType = this.changeSpectType.bind(this);
    this.clearSpectators = this.clearSpectators.bind(this);
    this.resetSeats = this.resetSeats.bind(this);
  }

  clearSpectators() {
    this.setState({
      spectatorsList: [
        {
          id: 0,
          humanId: 1,
          type: 'ADT',
          seat: '',
          tktNo: '',
          zoneId: 0,
          active: true,
          price: 0,
          selectedForSeat: true,
        },
      ],
    });
  }

  resetSeats() {
    const spectList = this.state.spectatorsList;
    spectList.forEach((sp) => {
      sp.seat = '';
      sp.price = 0;
    });

    this.setState({
      spectatorsList: spectList,
    });
  }


  removeSpect(spectId) {
    const spectList = this.state.spectatorsList;
    spectList.forEach((sp) => {
      sp.selectedForSeat = false;
      if (sp.id === spectId) {
        sp.active = false;
      }
    });

    this.setState({
      spectatorsList: spectList,
    });
  }

  pickSeat(spectId) {
    const spectList = this.state.spectatorsList;
    spectList.forEach((sp) => {
      sp.selectedForSeat = false;
      if (sp.id === spectId) {
        sp.selectedForSeat = true;
      }
    });

    this.setState({
      spectatorsList: spectList,
    });
  }


  changeSpectType(newType, spectId) {
    // if child and one pax issue alert and dont change
    // if seat selected check if supported by this type if not alert
    // show seats that are supported by this type
    const spectList = this.state.spectatorsList;
    spectList.forEach((sp) => {
      if (sp.id === spectId) {
        sp.type = newType;
        sp.price = 0;
        sp.seat = '';
      }
    });

    this.setState({
      spectatorsList: spectList,
    });
  }


  updateSeat(seatName, zoneId) {
    const spectList = this.state.spectatorsList;
    const spect = spectList.filter(sp => sp.selectedForSeat === true)[0];
    spect.seat = seatName;
    spect.zoneId = zoneId;
    spect.price = this.state.performanceDetails.pricesList.filter(zn => ((zn.zone.id === zoneId) && (zn.typ.title === spect.type)))[0].price;

    this.setState({
      spectatorsList: spectList,
    });
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
      zoneId: 0,
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
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/seatkeys`),
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/performance`),
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/seats`),
    ]).then(axios.spread((seatMap, perform, taken) => {
      self.setState({
        mapping: seatMap.data,
        fetched: true,
        performanceDetails: perform.data,
        zones: perform.data.pricesList,
        takenSeats: taken.data,
      });
    })).catch((err) => {
      console.log(err);
    });
  }

  render() {
    console.log('env');
    console.log(process.env);

    const selectedSeats = get_selectedSeats(this.state.spectatorsList);
    const selectedSpectType = get_selectedSpectType(this.state.spectatorsList);
    const onlyChildSpects = get_onlyChildSpects(this.state.spectatorsList);
    const spectatorCount = get_spectatorCount(this.state.spectatorsList);

    return (

        <main>
            <section id="zonePrices">

            {this.state.fetched
            && <ZonePricing zones={this.state.performanceDetails.pricesList} />
            }
        </section>

            <section>


        {this.state.fetched
                && (
                <SeatMap
                  spectatorsList={this.state.spectatorsList}
                  mapping={this.state.mapping}
                  selectedSeats={selectedSeats}
                  selectedSpecType={selectedSpectType}
                  pricing={this.state.performanceDetails.pricesList}
                  takenSeats={this.state.takenSeats}
                  updateSeat={this.updateSeat}
                />
                )
                 }



        <SpectatorList
          resetSeats={this.resetSeats}
          clearSpectators={this.clearSpectators}
          spectatorsList={this.state.spectatorsList}
          oneChildSpect={onlyChildSpects}
          spectatorCount={spectatorCount}
          removeSpect={this.removeSpect}
          changeSpectType={this.changeSpectType}
          pickSeat={this.pickSeat}
        />


        <div className="row">
          <div className="col-4 offset-4">
            <button className="btn btn-primary btn-success" id="addSpectButt" onClick={this.addSpectator}>
              <span>Add Spectator</span>
            </button>
          </div>
        </div>


        <Contact />

        {onlyChildSpects === false
            && <Payment />
          }

        <PriceBox spectatorsList={this.state.spectatorsList} />


      </section>
        </main>

    );
  }
}

export default BookSpectacle;
