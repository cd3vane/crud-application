import React, { useEffect, useState } from 'react';
import Contact from './Contact';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('/api/contacts')
        .then(response => response.json())
        .then(data => {
            console.log(data._embedded.contacts);
            setContacts(data._embedded.contacts);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <p>Loading...</p>;
     }
    return (
        <div>
            <h1>Contacts</h1>
            <div className="row">
                {contacts.map(contact => 
                    <Contact key={contact.firstName} item={contact} />
                )}
            </div>
        </div>
    );
}

export default Contacts;