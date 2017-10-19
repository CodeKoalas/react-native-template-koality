const HYDRATED = 'HYDRATED';

function endHydration() {
  return { type: HYDRATED };
}

export const actionCreators = {
  endHydration,
};

export const actionTypes = {
  HYDRATED,
};

export default function reducer(state = false, action) {
  switch (action.type) {
    case HYDRATED:
      return true;
    default:
      return state;
  }
}
