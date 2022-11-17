const BASE_API = 'http://10.0.0.162/api'

// Authentication
export default {
  // CHECK TOKEN
  checkToken: async (token) => {
    try {
      const response = await fetch(`${BASE_API}/refresh/`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ token })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      return error.message;
    }
  },
  // SIGN-IN
  signIn: async (username, password) => {
    try {
      const response = await fetch(`${BASE_API}/login/`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ username, password })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      console.log('ERROR API ' + error)
      return error.message;
    }
  },
  // SIGN-UP
  signUp: async (username, email, password) => {
    try {
      const response = await fetch(`${BASE_API}/register/`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ username, email, password })
      });
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      return error.message;
    }
  },
};