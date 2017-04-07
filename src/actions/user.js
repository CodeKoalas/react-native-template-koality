const login = user => ({
  type: 'LOGIN',
  user,
});

const logout = () => ({
  type: 'LOGOUT',
});

const update = user => ({
  type: 'UPDATE',
  user,
});

export default { login, logout, update };
