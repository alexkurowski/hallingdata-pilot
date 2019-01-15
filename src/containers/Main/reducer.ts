const initialState = {
  notificationSent: false,
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'main_notified':
      return {
        ...state,
        notificationSent: true
      };

    default:
      return state;
  }
};
