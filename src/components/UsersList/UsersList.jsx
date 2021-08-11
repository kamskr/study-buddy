import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UserListItem userData={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
