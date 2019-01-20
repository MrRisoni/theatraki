import React, { Component } from 'react';
import '../styles/contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surname: '',
      gender: '',
      name: '',
      mobile: '',
      email: '',
    };

    this.editName = this.editName.bind(this);
    this.editSurname = this.editSurname.bind(this);
    this.editMail = this.editMail.bind(this);
    this.editMobile = this.editMobile.bind(this);
      this.editGender = this.editGender.bind(this);

  }

    editGender(ev){
        this.setState({
            gender: ev.target.value,
        });
        this.props.updateParent(this.state);
    }


  editName(ev) {
    console.log(ev.target.value);
    this.setState({
      name: ev.target.value,
    });
    this.props.updateParent(this.state);
  }

  editSurname(ev) {
    console.log(ev.target.value);
    this.setState({
      surname: ev.target.value,
    });
      this.props.updateParent(this.state);

  }

  editMail(ev) {
    console.log(ev.target.value);
    this.setState({
      email: ev.target.value,
    });
      this.props.updateParent(this.state);

  }


  editMobile(ev) {
    console.log(ev.target.value);
    this.setState({
      mobile: ev.target.value,
    });
      this.props.updateParent(this.state);

  }

  render() {
    return (
      <section>

        <div className="row contactDetails">
          <div className="col-8 offset-1">

            <div className="card">

              <div className="card-header bg-light">
                <div className="row">
                  <div className="col-4">Contact Details</div>
                  <div className="col-2"><i className="fas fa-phone" /></div>
                  <div className="col-2 offset-3">
                    <button
                      className="btn btn-sm btn-dark btn-block btnToggle"
                      data-toggle="collapse"
                      data-target="#ContactCollapse"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >


Toggle
                    </button>
                  </div>
                </div>
              </div>


              <div className="card-body show" id="ContactCollapse">
                <div className="row contactRow ">
                  <div className="col-2">
                    <select className="form-control" onChange={this.editGender}>
                      <option />
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="Surname"
                      value={this.state.surname}
                      className="form-control"
                      onChange={this.editSurname}
                    />
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="Name"
                      value={this.state.name}
                      className="form-control"
                      onChange={this.editName}

                    />
                  </div>
                </div>


                <div className="row contactRow">
                  <div className="col-2">
                    <input
                      type="text"
                      placeholder="Prefix"
                      className="form-control"
                    />
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="Mobile"
                      value={this.state.mobile}
                      className="form-control"
                      onChange={this.editMobile}
                    />
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                      className="form-control"
                      onChange={this.editMail}

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

export default Contact;
