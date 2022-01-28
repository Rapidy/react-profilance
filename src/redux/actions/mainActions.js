export function setIsPopupVisible(boolean) {
  return {
    type: 'SET_POPUP',
    payload: boolean,
  };
}

export function setLogin(login) {
  return {
    type: 'SET_LOGIN',
    payload: login,
  };
}
