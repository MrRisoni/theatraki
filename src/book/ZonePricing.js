import React from 'react';

const ZonePricing = (props) => {
  return (
    <section>
      <div className="row">
        <div className="col-8 offset-1">
          <div className="alert alert-primary" role="alert">
            <div className="row">
              <div className="col-6">
                  Zone Prices
              </div>

              <div className="col-2">
                <button
                  className="btn btn-sm btn-dark btn-block btnToggle"
                  data-toggle="collapse"
                  data-target="#zonePricesCollapse"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span>Toggle</span>
                </button>
              </div>
            </div>

          </div>

          <section id="zonePricesCollapse" className="show">
            <table className=" table table-bordered table-striped table-sm ">
              <thead>
                <tr>
                  <th scope="col">Zone</th>
                  <th scope="col">Type</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {props.zones.map(zonep => {
                  const key = `zpkey_${zonep.zone.id}_${zonep.typ.title}`;

                  return (
                    <tr style={{ background: `#${zonep.zone.css}` }} key={key}>
                        <td>{zonep.zone.title}</td>

                        <td>
                            {zonep.typ.title === 'ADT'
                                            && <p>Adult</p>
                                            }
                            {zonep.typ.title === 'CHD'
                                            && <p>Child</p>
                                            }
                            {zonep.typ.title === 'ELD'
                                            && <p>Elder</p>
                                            }
                            {zonep.typ.title === 'STD'
                                            && <p>Student</p>
                                            }
                          </td>

                        <td>{zonep.price.toFixed(2)}</td>
                      </tr>);
                })}

              </tbody>
            </table>
          </section>


        </div>
      </div>

    </section>
  );
};

export default ZonePricing;
