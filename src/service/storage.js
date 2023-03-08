export function localSaveItem(key, value) {
  localStorage.setItem(key, value);
}

export function localLoadItem(key) {
  return localStorage.getItem(key);
}

export function localRemoveItem(key) {
  return localStorage.removeItem(key);
}

export function localAllRemoveItem() {
  return localStorage.clear();
}

export function SessionSaveItem(key, value) {
  sessionStorage.setItem(key, value);
}

export function SessionLoadItem(key) {
  return sessionStorage.getItem(key);
}

export function SessionRemoveItem(key) {
  return sessionStorage.removeItem(key);
}
