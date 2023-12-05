// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../redux/actions';
import { Container, Typography, List, Card, CardContent, Chip, Alert } from '@mui/material';

const UserList = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setUsers(props.users));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error.message);
        setError('Error fetching users. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, props.users]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && users && users.length > 0 ? (
        <List>
          {users.map((user) => (
            <Card key={user?.id} sx={{ marginBottom: '8px' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {user?.name?.firstname} - {user?.name?.lastname}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {user?.email}
                </Typography>
                <Chip label={user?.username} color="primary" />
              </CardContent>
            </Card>
          ))}
        </List>
      ) : (
        <Typography variant="body1">
          {users && users.length === 0 ? 'No users found.' : ''}
        </Typography>
      )}
    </Container>
  );
};

export default UserList;
