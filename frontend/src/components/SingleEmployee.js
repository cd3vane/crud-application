import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

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

    return (
    <div className='container'>
        <Link to='/' className='btn btn-light'>
            Back to dashboard
        </Link>

        <Link to={`/edit-employee/${params.id}`} className='btn btn-dark'>
            Edit Employee Details
        </Link>
        <h1 className='center'>{employee.firstName} {employee.lastName}</h1>
        <h3 className='center'>{employee.email}</h3>
        <h3 className='center'>{employee.role}</h3>
    </div>
    );
}

export default SingleEmployee;