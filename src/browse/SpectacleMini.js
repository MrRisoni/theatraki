/* eslint-disable max-len */
import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';


class  SpectacleMini extends Component {
    constructor(props) {
        super(props);

        this.handleBookClick = this.handleBookClick.bind(this);
    }

    handleBookClick()
    {


        this.props.history.push('/finished');

    }

    render()
    {
        return (
            <div className="col-5">

                <div className="card">
                    <div className="card-header">
                        {this.props.venue.playName} {this.props.venue.authNam}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <p> {this.props.venue.theaterName} Season {this.props.venue.seasonId}</p>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12">
                                From {moment.unix(this.props.venue.fromDate / 1000).format("DD/MM/YYYY")} to {moment.unix(this.props.venue.toDate / 1000).format("DD/MM/YYYY")}
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12">
                                Capacity {this.props.venue.avgCapacity.toFixed(2)}%
                            </div>
                        </div>


                    </div>

                    <div className="card-footer">
                        <div className="row">
                            <div className="col-6">
                                Price range {this.props.venue.minPrice} &euro; - {this.props.venue.maxPrice} &euro;
                            </div>

                            <div className="col-3">
                                <button type="button" className="btn btn-primary">
                                    <Link to={`/book/${this.props.venue.performanceId}`}>Book</Link>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
};

export default SpectacleMini;
