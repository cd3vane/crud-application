import React from 'react';


const EmployeeCard = ({ item }) => {
    const { firstName, lastName, emailAddress, role } = item;
    return (
    <div className="row">
        <div className="col s6 offset-s3">
        <div className="card blue-grey darken-3">
            <div className="card-content white-text">
            <span className="card-title">{firstName} {lastName}</span>
            </div>
            <div className="card-action">
            <p className="white-text">Email: {emailAddress}</p>
            <p className="white-text">Role: {role}</p>
            </div>
            <div class="card-action">
          <a href={firstName}>View Employee</a>
        </div>
        </div>
        </div>
    </div>
    )
}

export default EmployeeCard;