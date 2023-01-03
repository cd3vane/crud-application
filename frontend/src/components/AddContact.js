import React, { useState }  from 'react';

const ContactCard = () => {
    const [contact, setContact] = useState({ firstName: "", lastName: "", emailAddress: "" })
    
    const saveContact = () => {
        fetch('api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: contact.firstName,
            lastName: contact.lastName,
            emailAddress: contact.emailAddress,
          }),
        })
          .then((res) => res.json())
          .catch((err) => console.log('error'))
      }

    const handleSubmit = (event) => {
        saveContact()
      }
    
      const handleChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
      }

    return (
        <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
            <div className="input-field col s6">
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    value={contact.firstName}
                />
                <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
                <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={handleChange}
                        value={contact.lastName}
                    />
                <label htmlFor="lastName">Last Name</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        onChange={handleChange}
                        value={contact.emailAddress}
                    />
                <label htmlFor="emailAddress">Email</label>
            </div>
        </div>
        <div className="row">
           <button className="waves-effect waves-light btn" type='submit' name='action'>
            Submit
            </button>
        </div>
        </form>
    </div>
    )
}

export default ContactCard;