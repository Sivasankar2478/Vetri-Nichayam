import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const createUser = () => {
    const [formData, setFormData] = useState({ userId: "", name: "", age: "", email: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = axios.put(`http://localhost:8000/update-user/${formData.userId}`, formData)
            console.log(response);

        } catch (error) {
            console.log(error);

        }
    }
    console.log(formData)
    return (
        <div>
            <h2>Update User</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <label> User ID <br />
                        <input type="text" name='userId' onChange={handleChange} />
                    </label><br /><br />
                    <label>Name <br />
                        <input type="text" name='name' onChange={handleChange} />
                    </label><br /><br />
                    <label>Age <br />
                        <input type="number" name='age' onChange={handleChange} />
                    </label><br /><br />
                    <label>Email <br />
                        <input type="text" name='email' onChange={handleChange} />
                    </label><br /><br />
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default createUser
