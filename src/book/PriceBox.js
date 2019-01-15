import React from 'react';
import './pricebox.css';

const PriceBox = (props) => {
    return (
        <section>
            <div className="PriceBox">

                <div className="row">
                    <div className="col-8 offset-1">
                        <div className="card bg-info">
                            <div className="card-header">
                                <b> PriceAnalysis </b>
                            </div>
                            <div className="card-body text-white">
                            </div>
                            <div className="card-footer">
                                <h3>Total Price totalPrice &euro;</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PriceBox;
