import React from "react";
import UserList from "@/components/UserList";
import { User } from "@/types/user";
import { getAdminUsers } from "@/lib/get-admin-users";

const users = ({ users }: { users: User[] }) => {
  return (
    <div>
      <h1>Alla användare</h1>
      <UserList users={users} />
    </div>
  );
};

export default users;

export const getServerSideProps = getAdminUsers;
