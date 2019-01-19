import React, { Component } from 'react';
import axios from 'axios';
import CogWheel from '../common/CogWheel';
import SpectacleMini from './SpectacleMini';

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      fetched: false,
    };
  }

  componentDidMount() {
    const self = this;
    console.log(process.ENV);
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/performances`)
      .then((responseObj) => {
        const responseData = responseObj.data;

        self.setState({
          venues: responseData,
          fetched: true,
        });
      }).catch((err) => {
        self.setState({
          errorMsg: err.message,
        });
      });
  }

  render() {
    return (
      <section>
        {this.state.fetched
                    && (
                    <div className="row">
                      {this.state.venues.map(vn => (<SpectacleMini venue={vn} />))}
                    </div>
                    )
                }

        {!this.state.fetched
                     && <CogWheel />
                }
      </section>

    );
  }
}

export default Browser;
