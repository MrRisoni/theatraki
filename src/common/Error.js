import React from 'react';

const Error = (props) => {
    return (
        <div className="row notAllHaveSeats">
            <div className="col-8 offset-1">
                <div className="alert alert-danger" role="alert">
                    {props.message}
                </div>
            </div>
        </div>
    )
};

export default Error;
