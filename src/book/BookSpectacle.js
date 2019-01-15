import React, {Component} from 'react';
import axios from 'axios';
import SeatMap from "./seatmap/SeatMap";


class BookSpectacle extends Component {
    constructor(props) {
        super(props);
        this.state = { mapping:[], fetched:false}
    }

    componentDidMount()
    {
        const self = this;
        axios.get('http://localhost:8080/api/seatmap').then(rsp => {

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
            </section>

        );
    }
}

export default BookSpectacle;


