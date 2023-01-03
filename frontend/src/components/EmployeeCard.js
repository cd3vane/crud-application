import React from 'react';


const EmployeeCard = ({ item }) => {
    const { firstName, lastName, emailAddress, role } = item;
    return (
    <div className="row">
        <div className="col s12 m6">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
            <span className="card-title">{firstName} {lastName}</span>
            </div>
            <div className="card-action">
            <p>{emailAddress}</p>
            <p>{role}</p>
            </div>
        </div>
        </div>
    </div>
    )
}

export default EmployeeCard;