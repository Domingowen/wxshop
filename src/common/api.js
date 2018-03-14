export function LocalStorage () {
  if (arguments.length > 1) {
    localStorage.setItem(arguments[0], JSON.stringify(arguments[1]))
  } else {
    let val = JSON.parse(localStorage.getItem(arguments[0]))
    return val
  }
}
export function clearLocalStorage (key) {
  localStorage.removeItem(key)
}
