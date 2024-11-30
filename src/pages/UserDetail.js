
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.data.find((user) => user.id === parseInt(id))
  );

  if (!user) return <div>User not found.</div>;

  return (
    <div className="p-6 bg-white shadow rounded">
      <h1 className="text-xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Address: {user.address.street}, {user.address.city}
      </p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserDetail;
