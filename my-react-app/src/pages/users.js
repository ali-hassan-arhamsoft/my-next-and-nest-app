// src/pages/users.js
import React from 'react';
import { Provider } from 'react-redux';
import UserList from '../components/UserList';
import store from '../redux/store';

const User = ({ users }) => {
  return (
    <Provider store={store}>
      <UserList users={users}/>
    </Provider>
  );
};

export const getStaticProps = async () => {
  // fetch data from an API
  try {
    const usersResponse = await fetch('http://localhost:4000/users').then((res) => res.json());
    const users = !usersResponse.error ? usersResponse : [];

    return {
      props: {
        users
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error.message);
    return {
      props: { users: [] },
    };
  }
};

export default User;
