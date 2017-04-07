const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'UPDATE':
      return Object.assign({}, state.user, action.user);
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export default user;
