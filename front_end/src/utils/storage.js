import { STORAGE_KEY } from "appConstants";

const storagePrefix = "quiz_app";

const storage = {
  getUserId(key = STORAGE_KEY.USER_ID) {
    return this.getValue(key);
  },
  getValue: (key = "token") => {
    const value = window.sessionStorage.getItem(`${storagePrefix}_${key}`);
    if (value) {
      return JSON.parse(value);
    } else {
      return value;
    }
  },
  setValue: (key, value) => {
    if (typeof value != "string") {
      value = JSON.stringify(value);
    }
    window.sessionStorage.setItem(`${storagePrefix}_${key}`, value);
  },
  setToken: (token) => {
    window.sessionStorage.setItem(
      `${storagePrefix}_token`,
      JSON.stringify(token)
    );
  },
  clearToken: () => {
    window.sessionStorage.removeItem(`_`);
  },
};

export default storage;
