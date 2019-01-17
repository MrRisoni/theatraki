import React from 'react';
import './pricebox.css';

const PriceBox = (props) => {
  let totalPrice = props.spectatorsList
    .filter(spl => spl.active === true)
    .map(actSpl => actSpl.price).reduce((a, b) => a + b, 0);


  totalPrice = totalPrice.toFixed(2);
  return (
    <section>
      <div className="PriceBox">

        <div className="row">
          <div className="col-8 offset-1">
            <div className="card bg-info">
              <div className="card-header">
                <b> PriceAnalysis </b>
              </div>
              <div className="card-body text-white" />
              <div className="card-footer">
                <h3>
Total Price {' '}
                  {totalPrice}
                  {' '}
&euro;
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceBox;
