import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminList = () => {
    const [name, setMessage] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/api/hello')
          .then(response => {
            setMessage(response.data);
          });
      }, []);

    return (
        <div>
            <h1>Admin List</h1>
            <h1>Test connect {name}</h1>
        </div>
    );
}

export default AdminList;
