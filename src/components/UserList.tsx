import React from "react";
import { User } from "@/types/user";

const UserList = ({ users }: { users: User[] }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.role})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
