import React from 'react';


const ContactCard = ({ item }) => {
    const { firstName, lastName, emailAddress } = item;
    return (
    <div className="row">
        <div className="col s12 m6">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
            <span className="card-title">{firstName} {lastName}</span>
            </div>
            <div className="card-action">
            <p>{emailAddress}</p>
            </div>
        </div>
        </div>
    </div>
    )
}

export default ContactCard;