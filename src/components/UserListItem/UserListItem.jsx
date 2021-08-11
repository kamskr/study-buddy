import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ userData }) => {
  const { name, average, attendance } = userData;

  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
  }),
};

export default UserListItem;
