import React, { useState } from "react";
import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";

function Dashboard() {
  const [page, setPage] = useState(""); // State to track navigation [cite: 280]

  return (
    <div>
      <h1>News Portal Dashboard</h1>
      {/* Navigation Buttons [cite: 284-286] */}
      <button onClick={() => setPage("local")}>Local Users</button>
      <button onClick={() => setPage("api")}>Users API</button>
      <button onClick={() => setPage("posts")}>Fake API Posts</button>
      <hr />

      {/* Conditional Rendering based on state [cite: 288-290] */}
      {page === "local" && <LocalUserList />}
      {page === "api" && <UserList />}
      {page === "posts" && <FakePostList />}
    </div>
  );
}

export default Dashboard;