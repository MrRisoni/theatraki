import React, {Component} from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <section>

                <div className="row contactDetails">
                    <div className="col-8 offset-1">

                        <div className="card">

                            <div className="card-header bg-light">
                                <div className="row">
                                    <div className="col-4">Contact Details</div>
                                    <div className="col-2"><i className="fas fa-phone"/></div>
                                    <div className="col-2 offset-3">
                                        <button className="btn btn-sm btn-dark btn-block btnToggle"
                                                data-toggle="collapse"
                                                data-target="#busContactCollapse" aria-expanded="false"
                                                aria-controls="collapseExample">Toggle
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="card-body collapse show" id="busContactCollapse">
                                <div className="row">
                                    <div className="col-2"><select className="form-control">
                                        <option></option>
                                        <option value="MR">Male</option>
                                        <option value="MS">Female</option>
                                    </select></div>
                                    <div className="col-5"><input type="text" placeholder="Surname" value="FOO"
                                                                  className="form-control"/></div>
                                    <div className="col-5"><input type="text" placeholder="Name" value="BAR"
                                                                  className="form-control"/>
                                    </div>
                                </div>


                                    <div className="row">
                                        <div className="col-2"><input type="text" placeholder="Prefix"
                                                                      className="form-control"/></div>
                                        <div className="col-5"><input type="text" placeholder="Mobile"
                                                                      className="form-control"/></div>
                                        <div className="col-5"><input type="text" placeholder="Email"
                                                                      className="form-control"/></div>
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


