import React, { Component } from 'react';
import '../styles/spectator.css';

class Spectator extends Component {
  constructor(props) {
    super(props);

    this.pickSeat = this.pickSeat.bind(this);
    this.removeSpect = this.removeSpect.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  removeSpect() {
    console.log(`removing ${this.props.specData.id}`);
    this.props.removeSpect(this.props.specData.id);
  }

  changeType(ev) {
    console.log(ev.target.value);
    this.props.changeSpectType(ev.target.value, this.props.specData.id);
  }

  pickSeat() {
    this.props.pickSeat(this.props.specData.id);
  }

  render() {
    const colorClass = (this.props.specData.selectedForSeat) ? ' bg-success ' : ' bg-info ';

    return (
      <section className="spectatorElem">


        <div className="card">
          <div className={`card-header ${colorClass}`}>
            <div className="row">
              <div className="col-5">


                                Spectator #
                {this.props.specData.humanId}

              </div>

              <div className="col-2"><i className="fas fa-eye" /></div>

              <div className="col-4">
                <button className="btn btn-primary btn-warning" onClick={this.pickSeat}>
Pick Seat
                </button>
              </div>

            </div>


          </div>
          <div className="card-body">

            <div className="row">
              <div className="col-4">

                  Seat
                  {' '}
                {this.props.specData.seat}
              </div>

              <div className="col-1">
                <label htmlFor="exampleFormControlSelect1">Type </label>

              </div>
              <div className="col-3">
                <div className="form-group">
                  <select
                    className="form-control"
id="exampleFormControlSelect1"
                    onChange={this.changeType}
                  >
                    <option value="ADT">Adult</option>
                    <option value="CHD">Child</option>
                    <option value="ELD">Elder</option>
                    <option value="STD">Student</option>
                  </select>
                </div>
              </div>

              <div className="col-4">

                                Seat Cost
                {' '}
                {this.props.specData.price}
                {' '}

                                &euro;
              </div>


            </div>
          </div>

          <div className="card-footer">

              {this.props.specData.type !== 'ADT' &&
                <div className="row">
                      <div className="col-10 offset-1">
                          <div className="alert alert-warning" role="alert">
                              Seats marked with red are not available for this type
                          </div>
                      </div>
                  </div>
              }

              {this.props.oneChildSpect===true &&
              <div className="row">
                  <div className="col-10 offset-1">
                      <div className="alert alert-warning" role="alert">
                          You must have at least one adult
                      </div>
                  </div>
              </div>
              }

              {this.props.spectatorCount > 1 &&
                <div className="row">
                  <div className="col-5 offset-4">
                    <button className="btn btn-danger" onClick={this.removeSpect}>
                        Remove Spectator
                    </button>
                  </div>
                </div>
              }

          </div>

        </div>

      </section>

    );
  }
}

export default Spectator;

