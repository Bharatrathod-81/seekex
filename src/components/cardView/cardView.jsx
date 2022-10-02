import './cardView.css';
import React from 'react';

export const CardVeiw = ({data}) => {

    const datePipe = (data) => {
        const year = data.split('-')[0];
        const currentDate = new Date;
        const currentYear = currentDate.getFullYear();
        return currentYear-year
    };

    return (
        <div>
            <div className="card" style={{width:'18rem'}}>
                <img src={data?.avatar} className="card-img-top" alt="card-img" />
                    <div className="card-body">
                        <h5 className="card-title">Name: {data?.fullName}</h5>
                        <p className="card-text">Eamil: {data?.email}</p>
                        <p>Age: {datePipe(data?.DOB)}</p>
                    </div>
            </div>

        </div>
    )
}

