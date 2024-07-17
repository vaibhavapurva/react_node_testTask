import axios from 'axios';

const API_URL = 'http://localhost:3000/api/products/';

class ProductService {
  getProducts() {
    return axios.get(API_URL);
  }

  createProduct(product) {
    return axios.post(API_URL, product, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  updateProduct(id, product) {
    return axios.put(`${API_URL}${id}`, product, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }

  deleteProduct(id) {
    return axios.delete(`${API_URL}${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }
}

export default new ProductService();
