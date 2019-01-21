import React, {Component} from 'react';
import axios from 'axios';

class FloorLayout extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            seatArray: [],
            fetched:false
        }
    }

    componentDidMount()
    {
        const self = this;
        console.log('sat floor');
       axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/seatfloor/1`).then(rsp => {
           console.log(rsp.data);
            self.setState({
                seatArray:rsp.data,
                fetched:true
            })
       }).catch(err => {
           console.log(err);
       })

    }
    render() {

        return (

            <section>
                {this.state.fetched &&

                <section id="seatFloor">

                    {this.state.seatArray.map(seatItem => {

                        let seatItemStyle = {
                            top: seatItem.top,
                            left: seatItem.left,
                            'backgroundColor': seatItem.color,
                            position: 'absolute'
                        }

                        return (<span key={seatItem.id} style={seatItemStyle}
                                      className="floorSeatButton"></span>)

                    })}
                </section>
                }

            <div className="row stageDiv">
            <div className="col-6 offset-2">
            <div className="alert alert-dark" role="alert">
            Stage
            </div>
    </div>
    </div>
            </section>

        );

    }
}

export default FloorLayout;



