const initialState = {
  isPopupVisible: false,
  login: 'Гость',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_POPUP':
      return { ...state, isPopupVisible: action.payload };
    case 'SET_LOGIN':
      return { ...state, login: action.payload };

    default:
      return state;
  }
}
