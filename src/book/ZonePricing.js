import React from 'react';

const ZonePricing = (props) => {
    return (
        <section>
            <div className="row">
                <div className="col-8 offset-1">
                    <div className="alert alert-primary" role="alert">
                        Zone Prices
                    </div>


                    <table className="table table-bordered table-striped table-sm ">
                        <thead>
                        <tr>
                            <th scope="col">Zone</th>
                            <th scope="col">Color</th>
                            <th scope="col">Type</th>
                            <th scope="col">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="zonep in getSeatPrices">
                            <td>{{zonep.zoneName}}</td>
                            <td style="background-color:#${zonep.css}" data-v-5072c378>{{zonep.css}}  </td>

                            <td>
                                <p v-if="zonep.type === 'ADT'">
                                    Adult
                                </p>
                                <p v-if="zonep.type === 'ELD'">
                                    Elder
                                </p>
                                <p v-if="zonep.type === 'STD'">
                                    Student
                                </p>
                                <p v-if="zonep.type === 'CHD'">
                                    Child
                                </p>

                            </td>
                            <td>{{zonep.price.toFixed(2)}}</td>
                        </tr>
                        </tbody>
                    </table>


                </div>
            </div>

        </section>
    )
};

export default ZonePricing;
