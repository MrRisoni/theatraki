import React, { Component } from 'react';
import '../styles/payment.css';
import lodash from "lodash";

class Payment extends Component {
  constructor(props) {
      super(props);
  }
  render() {

      const months = lodash.range(1,13 );
      const years = lodash.range(19, 30 );


      return (
      <section>

        <div className="row paymentDetails">
          <div className="col-8 offset-1">

            <div className="card ">
              <div className="card-header bg-light">
                <div className="row">
                  <div className="col-4">Credit Card</div>
                  <div className="col-2"><i className="far fa-credit-card" /></div>
                  <div className="col-2 offset-3">
                    <button
                      className="btn btn-sm btn-dark btn-block btnToggle"
                      data-toggle="collapse"
                      data-target="#creditCardCollapse"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
Toggle
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-body collapse show" id="creditCardCollapse">
                <div className="row paymentRow">
                  <div className="col-4">
                    <select className="form-control" id="cardType">
                        <option>Card Type</option>
                      <option value="VIDE">Visa Debit</option>
                      <option value="VICR">Visa Credit</option>
                      <option value="CADE">Mastercard Debit</option>
                      <option value="CACR">Mastercard Credit</option>
                    </select>
                  </div>
                  <div className="col-7"><input type="text" maxLength={16} placeholder="Card Number" className="form-control" /></div>
                </div>


                  <div className="row paymentRow">
                      <div className="col-4">
                          <select className="form-control" id="expMonth">
                              <option>Expiration Month</option>
                              {months.map(m => {
                                  return ( <option key={m} value={m}>{m}</option>)
                              })}
                          </select>
                      </div>

                      <div className="col-4">
                          <select className="form-control" id="expYear">
                              <option>Expiration Year</option>
                              {years.map(y => {
                                  return ( <option key={y} value={y}>{y}</option>)
                              })}
                          </select>
                      </div>

                  </div>



                <div className="row paymentRow">
                  <div className="col-9"><input type="text" placeholder="Card Holder" className="form-control" /></div>
                  <div className="col-2"><input type="text" maxLength={3} placeholder="CVV2" className="form-control" /></div>
                </div>


              </div>
            </div>
          </div>
        </div>


      </section>

    );
  }
}

export default Payment;
