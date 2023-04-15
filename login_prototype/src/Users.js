import { useState } from "react";

export const Users = () => {
    const [users, setUsers] = useState();
  return (
    <article>
        <h2>Users List</h2>
        {users?.lenght
            ? (
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>{user?.username}</li>
                    ))}
                </ul>
            ) :  <p>No users</p>
        }
    </article>
    )
}
