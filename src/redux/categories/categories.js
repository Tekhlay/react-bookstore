// Actions
const checkStatus = 'CHECK_STATUS';

// intial State
const initialState = [];

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkStatus:
      return 'under Construction!';
    default:
      return state;
  }
};

// Action Creators
const checkStatusAction = () => ({
  type: checkStatus,
});

// Export
export { checkStatusAction };
export default categoriesReducer;
