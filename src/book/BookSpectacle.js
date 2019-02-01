import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import SpectatorList from './people/SpectatorList';
import Contact from './people/Contact';
import Payment from './people/Payment';
import PriceBox from './PriceBox';
import ZonePricing from './ZonePricing';



import Konva from 'konva';
import { Stage, Layer, Shape } from 'react-konva';


import {
  get_onlyChildSpects,
  get_selectedSpectType,
  get_selectedSeats,
  get_spectatorCount,
  allPaxesHaveSeats,
  emptyContactVars,
} from './helpers';

import './styles/bookspectacle.css';
import Error from '../common/Error';
import CogWheel from '../common/CogWheel';
import FloorLayout from './floorplan/FloorLayout';

class BookSpectacle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      zones: [],
      performanceDetails: {},
      takenSeats: [],
      seatArray: [],
      errorMsg: '',
      paymentData: {
        cvv: '',
        cardHolder: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cardType: '',
      },
      contactData: {
        surname: '',
        gender: '',
        name: '',
        mobile: '',
        email: '',
      },
      showPayCogWheel: false,
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
    this.pay = this.pay.bind(this);

    this.updateContactData = this.updateContactData.bind(this);

    this.updatePaymentData = this.updatePaymentData.bind(this);
  }

  updatePaymentData(data) {
    this.setState({
      paymentData: data,
    });
  }


  updateContactData(data) {
    console.log(data);
    this.setState({
      contactData: data,
    });
  }


  pay() {
    const self = this;
    this.setState({
      showPayCogWheel: true,
    });

    const ppl = [];
    this.state.spectatorsList.filter(sp => sp.active).forEach((p) => {
      ppl.push(
        {
          type: p.type,
          seat: p.set,
        },
      );
    });

    console.log(ppl);

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/book`, { postData: { people: ppl } })
      .then((responseObj) => {
        const responseData = responseObj.data;

        this.props.history.push('/finished');
      }).catch((err) => {
        self.setState({
          errorMsg: err.message,
          showPayCogWheel: false,
        });

        this.props.history.push('/finished');
      });
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

    let assignedSelection = false;
    spectList.forEach((sp) => {
      sp.selectedForSeat = false;
      if (sp.active && assignedSelection === false) {
        sp.selectedForSeat = true;
        assignedSelection = true;
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

    console.log(this.props.match.params);

    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/prebook/${this.props.match.params.performanceId}`)
      .then((responseObj) => {
        const responseData = responseObj.data;

        self.setState({
          fetched: true,
          performanceDetails: responseData.performance,
          zones: responseData.zones,
          seatArray: responseData.seats,
          takenSeats: responseData.taken,
        });
      }).catch((err) => {
        self.setState({
          errorMsg: err.message,
        });
      });
  }

  render() {
    console.log('env');
    console.log(process.env);

    const selectedSeats = get_selectedSeats(this.state.spectatorsList);
    const selectedSpectType = get_selectedSpectType(this.state.spectatorsList);
    const onlyChildSpects = get_onlyChildSpects(this.state.spectatorsList);
    const spectatorCount = get_spectatorCount(this.state.spectatorsList);
    const emptyContactDetails = emptyContactVars(this.state.contactData);
    const emptyPayDetails = emptyContactVars(this.state.paymentData);


    const canProceedToPay = (onlyChildSpects === false) && (allPaxesHaveSeats(this.state.spectatorsList) === true) && (emptyContactDetails === false) && (emptyPayDetails === false);


    return (

      <main>

        {this.state.errorMsg !== ''
              && (
                <Error message={this.state.errorMsg} />
              )
          }


        <section id="zonePrices">

          {this.state.fetched
                      && <ZonePricing zones={this.state.performanceDetails.pricesList} />
                      }
        </section>





          <section>



          {this.state.fetched
                  && (
                  <FloorLayout
                    spectatorsList={this.state.spectatorsList}
                    seatArray={this.state.seatArray}
                    zones={this.state.zones}
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
              <button
                className="btn btn-primary btn-success"
                id="addSpectButt"
                onClick={this.addSpectator}
              >
                <span>Add Spectator</span>
              </button>
            </div>
          </div>


          <Contact updateParent={this.updateContactData} />

          <Payment updateParent={this.updatePaymentData} />

          {canProceedToPay === true
                && (
                <div className="row paymentRow">
                  <div className="col-4 offset-4">
                    <button className="btn btn-success" onClick={this.pay}>Complete Payment!</button>
                  </div>
                </div>
                )
            }


          {allPaxesHaveSeats(this.state.spectatorsList) === false
                && <Error message="Not all spectators have seats" />
            }

          {emptyContactDetails
                && <Error message="Empty Contact Details" />
            }

          {emptyPayDetails
            && <Error message="Empty Payment Details" />
            }


          <PriceBox spectatorsList={this.state.spectatorsList} />

          {this.state.showPayCogWheel
            && <CogWheel />
            }


        </section>
      </main>

    );
  }
}

export default BookSpectacle;
