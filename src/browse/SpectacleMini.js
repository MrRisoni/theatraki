/* eslint-disable max-len */
import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import CogWheel from "../common/CogWheel";

class SpectacleMini extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAuthors :false
        }
        this.handleShowActorsClick = this.handleShowActorsClick.bind(this);

    }
    handleShowActorsClick() {
       this.setState({
           showAuthors:true
       })
    }

    render() {
        return (
            <div className="col-5">

                <div className="card">
                    <div className="card-header">
                        {this.props.venue.playName} {this.props.venue.authorName}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <p> {this.props.venue.theaterName} Season {this.props.venue.seasonId}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                From {this.props.venue.fromDate}  to {this.props.venue.toDate}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                Capacity {this.props.venue.avgCapacity.toFixed(2)}%
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <button type="button" onClick={this.handleShowActorsClick} className="btn btn-sm btn-success">Show Actors</button>
                            </div>
                        </div>

                        {this.state.showAuthors   &&
                            <div className="row">
                                <div className="col-12">
                                    <table className="table table-sm table-bordered table-striped">
                                        {this.props.venue.actors.map(akt => (
                                            <tr key={akt.id}>
                                                <td>{akt.actorName}</td>
                                                <td>{akt.characterName}</td>
                                            </tr>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        }

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
