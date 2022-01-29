export function setIsPopupVisible(boolean) {
  return {
    type: 'SET_POPUP',
    payload: boolean,
  };
}

export function setLogIn(login) {
  return {
    type: 'SET_LOGIN',
    payload: login,
  };
}

export function setLogOut() {
  return {
    type: 'SET_LOGOUT',
  };
}
