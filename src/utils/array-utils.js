export const addItemToArray = (callback) => (arr) => (item) => {
  callback([...arr, ...item]);
};

export const removeItemFromArray = (callback) => (arr) => (index) => {
  callback([...arr.slice(0, index), ...arr.slice(index + 1)]);
};

export const calculateArrayTotal = (arr) => {
  return arr.reduce((currentvalue, value) => currentvalue + value, 0);
};

export const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (x, i) => i + start);
