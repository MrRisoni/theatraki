import React from 'react';

const ZonePricing = (props) => {
  console.log('zonepricing');
  console.log(props);


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

          <table id="zonePricesCollapse" className="show table table-bordered table-striped table-sm ">
            <thead>
              <tr>
                <th scope="col">Zone</th>
                <th scope="col">Color</th>
                <th scope="col">Type</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {props.zones.map(zonep => (
                <tr>
                  <td>{zonep.zone.title}</td>
                  <td style={{ color: zonep.zone.css }}>
                    {zonep.zone.css}
                    {' '}
                  </td>
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
                </tr>
              ))}


            </tbody>
          </table>


        </div>
      </div>

    </section>
  );
};

export default ZonePricing;
