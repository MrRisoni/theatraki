import React, { Component } from 'react';
import axios from 'axios';
import CogWheel from '../common/CogWheel';
import SpectacleMini from './SpectacleMini';
import Error from '../common/Error';

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      fetched: false,
      errorMsg: '',
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
        console.log('error');
        console.log(err);
        self.setState({
          fetched: true,
          errorMsg: err.message,
        });
      });
  }

  render() {
    return (
      <section>


        {(this.state.errorMsg !== '' && this.state.fetched)
          && (
          <Error message={this.state.errorMsg} />
          )
          }


        {(this.state.fetched && this.state.errorMsg === '')
                    && (
                    <div className="row">
                      {this.state.venues.map(vn => (<SpectacleMini key={vn.performanceId} venue={vn} />))}
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
