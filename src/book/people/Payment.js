import React, { Component } from "react";
import "../styles/payment.css";
import lodash from "lodash";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvv: "",
      cardHolder: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cardType: ""
    };

    this.editCvv = this.editCvv.bind(this);
    this.editCardHolder = this.editCardHolder.bind(this);
    this.editCardNumber = this.editCardNumber.bind(this);
    this.editExpMonth = this.editExpMonth.bind(this);
    this.editExpYear = this.editExpYear.bind(this);
    this.editCardType = this.editCardType.bind(this);
  }

  editCvv(ev) {
    this.setState({
      cvv: ev.target.value
    });
    this.props.updateParent(this.state);
  }

  editCardHolder(ev) {
    this.setState({
      cardHolder: ev.target.value
    });
    this.props.updateParent(this.state);
  }

  editCardNumber(ev) {
    this.setState({
      cardNumber: ev.target.value
    });
    this.props.updateParent(this.state);
  }

  editExpMonth(ev) {
    this.setState({
      expMonth: ev.target.value
    });
    this.props.updateParent(this.state);
  }

  editExpYear(ev) {
    this.setState({
      expYear: ev.target.value
    });
    this.props.updateParent(this.state);
  }

  editCardType(ev) {
    this.setState({
      cardType: ev.target.value
    });
    this.props.updateParent(this.state);
  }

  render() {
    const months = lodash.range(1, 13);
    const years = lodash.range(19, 30);

    return (
      <section>
        <div className="row paymentDetails">
          <div className="col-8 offset-1">
            <div className="card ">
              <div className="card-header bg-light">
                <div className="row">
                  <div className="col-4">Credit Card</div>
                  <div className="col-2">
                    <i className="far fa-credit-card" />
                  </div>
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
                    <select
                      className="form-control"
                      id="cardType"
                      onChange={this.editCardType}
                    >
                      <option>Card Type</option>
                      <option value="VIDE">Visa Debit</option>
                      <option value="VICR">Visa Credit</option>
                      <option value="CADE">Mastercard Debit</option>
                      <option value="CACR">Mastercard Credit</option>
                    </select>
                  </div>
                  <div className="col-7">
                    <input
                      type="text"
                      maxLength={16}
                      placeholder="Card Number"
                      onChange={this.editCardNumber}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row paymentRow">
                  <div className="col-4">
                    <select
                      className="form-control"
                      id="expMonth"
                      onChange={this.editExpMonth}
                    >
                      <option>Expiration Month</option>
                      {months.map(m => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-4">
                    <select
                      className="form-control"
                      id="expYear"
                      onChange={this.editExpYear}
                    >
                      <option>Expiration Year</option>
                      {years.map(y => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row paymentRow">
                  <div className="col-9">
                    <input
                      type="text"
                      placeholder="Card Holder"
                      onChange={this.editCardHolder}
                      className="form-control"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      maxLength={3}
                      placeholder="CVV2"
                      onChange={this.editCvv}
                      className="form-control"
                    />
                  </div>
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
