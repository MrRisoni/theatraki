import React from 'react';
import Spectator from './Spectator';

const SpectatorList = (props) => {

    return (
        <section className="show" id="spectatorsCollapse">
            <div className="row">
                <div className="col-8 offset-1">
                    {props.spectatorsList.filter(sp => sp.active).map(sp =>  {
                        return (<Spectator specData={sp}/>)
                    })}specData

                </div>
            </div>
</section>
    )
};

export default SpectatorList;
