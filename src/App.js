import React, { useEffect, useState } from 'react';

function App() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/admins')
      .then(response => response.json())
      .then(data => setAdmins(data));
  }, []);

  return (
    <div className="App">
      {admins.map((admin, index) => (
        <div key={index}>
          <h2>{admin.firstname} {admin.lastname}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;

