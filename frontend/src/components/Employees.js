import React, { useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('/api/employees')
        .then(response => response.json())
        .then(data => {
            setEmployees(data._embedded.employees);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <p>Loading...</p>;
     }
    return (
        <div>
            <div className="row">
                {employees.map(employee => 
                    <EmployeeCard key={employee._links.self.href} item={employee} />
                )}
            </div>
        </div>
    );
}

export default Employees;