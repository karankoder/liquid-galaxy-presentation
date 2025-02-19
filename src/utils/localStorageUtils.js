export const saveToLocalStorage = (data) => {
  try {
    Object.keys(data).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(data[key]));
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchfromLocalStorage = (keys) => {
  try {
    const data = {};
    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      data[key] = value ? JSON.parse(value) : '';
    });
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
