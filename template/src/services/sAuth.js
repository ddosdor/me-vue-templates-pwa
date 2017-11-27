/**
* description:
* File of sAuth Service
*
* Handle JWT authorization
* Modeled on angular-jwt library:
* source: https://github.com/auth0/angular-jwt/blob/master/src/angularJwt/services/jwt.js
*/
import { API_TOKEN_STORAGE } from '@/config';

const sAuth = (() => {
  return {
    setToken,
    decodeToken,
    getTokenExpirationDate,
    checkTokenExpirationDate,
    verifyToken,
    removeToken,
    getDataFromToken,
  };

  // /// PUBLIC /////////////////////////////////////////////////////////////////

  function setToken(token) {
    API_TOKEN_STORAGE.setItem('token', token);
  }

  function removeToken() {
    API_TOKEN_STORAGE.removeItem('token');
  }

  function decodeToken(token) {
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts');
    }

    const decoded = __urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
  }

  function getDataFromToken() {
    const token = API_TOKEN_STORAGE.getItem('token');
    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts');
    }

    const decoded = __urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
  }

  function getTokenExpirationDate(token) {
    const decoded = decodeToken(token);

    if (typeof decoded.exp === 'undefined') {
      return null;
    }

    let d = new Date(0); // The 0 here is the key, which sets the date to the epoch
    d.setUTCSeconds(decoded.exp);

    return d;
  }

  function checkTokenExpirationDate(token) {
    const d = getTokenExpirationDate(token);
    const offsetSeconds = offsetSeconds || 0;
    if (d === null) {
      return false;
    }

    // Token expired?
    return !(d.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
  }

  function verifyToken() {
    const token = API_TOKEN_STORAGE.getItem('token');
    return (token !== null && !checkTokenExpirationDate(token));
  }

  // /// PRIVATE ////////////////////////////////////////////////////////////////
  function __urlBase64Decode(str) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: { break; }
      case 2: { output += '=='; break; }
      case 3: { output += '='; break; }
      default: {
        return null;
      }
    }

    return window.decodeURIComponent(escape(window.atob(output)));
  }  
})();

export default sAuth;