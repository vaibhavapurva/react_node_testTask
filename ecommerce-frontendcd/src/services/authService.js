import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'http://localhost:3000/api/users/';

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + 'login', { username, password })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(username, password, role) {
    return axios.post(API_URL + 'register', { username, password, role });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
