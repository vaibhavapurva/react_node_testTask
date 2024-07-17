import axios from 'axios';

const API_URL = 'http://localhost:3000/api/orders/';

class OrderService {
  getOrders() {
    return axios.get(API_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  createOrder(order) {
    return axios.post(API_URL, order, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  updateOrder(id, order) {
    return axios.put(`${API_URL}${id}`, order, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }
}

export default new OrderService();
