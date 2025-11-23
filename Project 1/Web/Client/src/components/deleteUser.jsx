import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const createUser = () => {
    const [formData, setFormData] = useState({ userId: ""})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = axios.delete(`http://localhost:8000/delete-user/${formData.userId}`, formData)
            console.log(response);

        } catch (error) {
            console.log(error);

        }
    }
    console.log(formData)
    return (
        <div>
            <h2>Delete User</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <label> User ID <br />+
                        <input type="text" name='userId' onChange={handleChange} />
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
