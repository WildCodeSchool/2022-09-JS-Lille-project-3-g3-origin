function saveItem(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

function getItem(name) {
  return JSON.parse(localStorage.getItem(name));
}

function clearStorage() {
  localStorage.clear();
}

export default {
  saveItem,
  getItem,
  clearStorage,
};
