import React from 'react';
import Spectator from './Spectator';

const SpectatorList = props => (
  <section>
    <div className="row">
      <div className="col-8 offset-1">

        <div className="alert alert-primary" role="alert" id="spectatorAlert">
          <div className="row">
            <div className="col-5">
              <button type="button" className="btn btn-danger">Clear Spectators</button>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-warning">Reset Seats</button>
            </div>

            <div className="col-2">
              <button
                className="btn btn-sm btn-dark btn-block btnToggle"
                data-toggle="collapse"
                data-target="#spectatorsCollapse"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span>Toggle</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>


    <section className="show" id="spectatorsCollapse">
      <div className="row">
        <div className="col-8 offset-1">
          {props.spectatorsList.filter(sp => sp.active).map(sp => (
            <Spectator
              key={sp.id}
              changeSpectType={props.changeSpectType}
              removeSpect={props.removeSpect}
              spectatorCount={props.spectatorCount}
              oneChildSpect={props.oneChildSpect}
              pickSeat={props.pickSeat}
              specData={sp}
            />
          ))}
        </div>
      </div>
    </section>
  </section>
);

export default SpectatorList;
