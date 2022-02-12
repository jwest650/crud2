import React, { useEffect, useState } from "react";
import axios from "axios";
function User() {
    const [users, setusers] = useState([]);
    async function getPosts() {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        setusers(response.data);
    }
    useEffect(() => {
        getPosts();
        console.log(users);
    }, []);

    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.username}</p>
                        <p>{user.address.street}</p>
                        <p>{user.address.city}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default User;
