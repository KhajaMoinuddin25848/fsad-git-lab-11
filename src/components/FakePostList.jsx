import React, { useEffect, useState } from "react"; 
import axios from "axios"; 

function FakePostList() {
  const [posts, setPosts] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [userId, setUserId] = useState(""); 
  const fetchPosts = () => {
    axios.get("https://dummyjson.com/posts") 
      .then((res) => {
        setPosts(res.data.posts); 
        setFilteredPosts(res.data.posts); 
      });
  };

  useEffect(() => { fetchPosts(); }, []); 

  const filterPosts = (e) => {
    const value = e.target.value; 
    setUserId(value); 
    if (value === "") {
      setFilteredPosts(posts); 
    } else {
      setFilteredPosts(posts.filter(p => p.userId === parseInt(value))); 
    }
  };

  return (
    <div>
      <h2>Fake API Posts</h2> 
      <select onChange={filterPosts} value={userId}>
        <option value="">All Users</option> 
        <option value="1">User 1</option> 
      </select>
      {filteredPosts.map(post => (
        <div key={post.id}><h4>{post.title}</h4><p>{post.body}</p></div> 
      ))}
    </div>
  );
}
export default FakePostList; 