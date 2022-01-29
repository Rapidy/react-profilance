const initialState = {
  isPopupVisible: false,
  login: 'Гость',
  isAuth: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_POPUP':
      return { ...state, isPopupVisible: action.payload };
    case 'SET_LOGIN':
      return { ...state, login: action.payload, isAuth: true };
    case 'SET_LOGOUT':
      return { ...state, login: initialState.login, isAuth: false };

    default:
      return state;
  }
}
