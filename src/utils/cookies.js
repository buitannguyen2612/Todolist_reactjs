// This function create new cookie and adding day in that
function createCookie(name, value, days) {
  let expires;
  if (days) {
    expires = ";expires=" + days;
  } else expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  if (typeof document === "undefined") return null;
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

function getCookieValue(name) {
  const regex = new RegExp(`(^| )${name}=([^;]+)`);
  const match = document.cookie.match(regex);
  if (match) {
    return match[2];
  }
}

function clearCookie(name) {
  createCookie(name, "", -1);
}

module.exports = { createCookie, clearCookie, readCookie, getCookieValue };
