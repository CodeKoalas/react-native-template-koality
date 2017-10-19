const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const UPDATE = 'UPDATE';

function login(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

function update(user) {
  return {
    type: UPDATE,
    payload: user,
  };
}

export const actionCreators = {
  login,
  logout,
  update,
};

export const actionTypes = {
  LOGIN,
  LOGOUT,
  UPDATE,
};

export default function reducer(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case UPDATE:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
