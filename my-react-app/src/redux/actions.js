// src/redux/actions.js
export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
});

export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users,
});