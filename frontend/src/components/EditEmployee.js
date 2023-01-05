import React, { useState }  from 'react';

const EditEmployee = () => {
    const [employee, setEmployee] = useState({ 
      firstName: "", 
      lastName: "",
      emailAddress: "",
      role: "",
     })
    
    const saveEmployee = () => {
        fetch('api/employees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: employee.firstName,
            lastName: employee.lastName,
            emailAddress: employee.emailAddress,
            role: employee.role,
          }),
        })
          .then((res) => res.json())
          .catch((err) => console.log('error'))
      }

    const handleSubmit = (event) => {
        saveEmployee()
      }
    
      const handleChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value });
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
                    value={employee.firstName}
                />
                <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
                <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={handleChange}
                        value={employee.lastName}
                    />
                <label htmlFor="lastName">Last Name</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s6">
                <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        onChange={handleChange}
                        value={employee.emailAddress}
                    />
                <label htmlFor="emailAddress">Email</label>
            </div>
            <div className="input-field col s6">
                <input
                        id="role"
                        name="role"
                        type="text"
                        onChange={handleChange}
                        value={employee.role}
                    />
                <label htmlFor="role">Role</label>
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

export default EditEmployee;