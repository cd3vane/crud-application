import React from 'react';
import { Link } from "react-router-dom";


const EmployeeCard = ({ item }) => {
    const { firstName, lastName, email, role } = item;
    const id = item._links.self.href.slice(-1);
    return (
    <div className="row">
        <div className="col s6 offset-s3">
        <div className="card blue-grey darken-3">
            <div className="card-content white-text">
            <span className="card-title">{firstName} {lastName}</span>
            </div>
            <div className="card-action">
            <p className="white-text">Email: {email}</p>
            <p className="white-text">Role: {role}</p>
            </div>
            <div class="card-action">
            <Link to={`employee/${id} `}>View Employee</Link>
        </div>
        </div>
        </div>
    </div>
    )
}

export default EmployeeCard;