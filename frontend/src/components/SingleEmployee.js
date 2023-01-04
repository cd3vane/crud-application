import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const SingleEmployee = () => {
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        setLoading(true);

        fetch('/api/employees/' + params.id)
        .then(response => response.json())
        .then(data => {
            setEmployee(data);
            setLoading(false);
        })
    }, [params.id]);

    if (loading) {
        return <p>Loading...</p>;
     }

    return <h1>User Details: {employee.firstName}</h1>;
}

export default SingleEmployee;