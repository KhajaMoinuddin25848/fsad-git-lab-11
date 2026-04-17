import React, { useEffect, useState } from "react";

function LocalUserList() {
  const [users, setUsers] = useState([]); // State for user data [cite: 132]
  const [loading, setLoading] = useState(true); // State for loading status [cite: 133]
  const [error, setError] = useState(null); // State for error messages [cite: 134]

  useEffect(() => {
    fetch("/users.json") // Fetching from public folder [cite: 136]
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data"); // Error handling [cite: 138-140]
        return res.json(); 
      })
      .then((data) => {
        setUsers(data); // Save data to state [cite: 144]
        setLoading(false); // Stop loading [cite: 145]
      })
      .catch((err) => {
        setError(err.message); // Use 'err' to update 'error' state [cite: 148]
        setLoading(false); 
      });
  }, []); // Empty array ensures this runs once [cite: 151]

  // 1. Check for loading first [cite: 152]
  if (loading) return <p>Loading users...</p>;

  // 2. Check for errors (This uses the 'error' variable and clears the warning) 
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  // 3. Render the data [cite: 154-166]
  return (
    <div>
      <h2>Local Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default LocalUserList;