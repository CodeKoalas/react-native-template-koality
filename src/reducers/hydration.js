const hydration = (state = false, action) => {
  switch (action.type) {
    case 'HYDRATED':
      return true;
    default:
      return state;
  }
};

export default hydration;
