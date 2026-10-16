
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { getUsers } from "./getUsers.jsx";
const API_URL = "https://jsonplaceholder.typicode.com/users";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        setUsers(res.data); 
        setLoading(false);
      })
  }, []);
  // useEffect(() => {
  //   // getUsers();
  //   setUsers(getUsers())
  //   setLoading(false);
  // }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      {users.slice(0, 5).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
