export const getLocalStorage = (key) => {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

export const setLocalStorage = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
