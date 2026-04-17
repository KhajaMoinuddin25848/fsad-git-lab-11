import React, { useEffect, useState } from "react"; // Only import React hooks [cite: 175]

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Public API [cite: 181]
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
       }, []);

  if (loading) return <p>Loading API users...</p>;

  return (
    <div>
      <h2>Users from API</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList; // [cite: 208]