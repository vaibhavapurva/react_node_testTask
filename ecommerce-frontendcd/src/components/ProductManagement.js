import React, { useEffect, useState } from 'react';
import ProductService from '../services/productService';
import '../App.css';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    ProductService.getProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    ProductService.createProduct(newProduct).then(() => {
      setNewProduct({ name: '', price: '', description: '' });
      ProductService.getProducts().then(response => {
        setProducts(response.data);
      });
    });
  };

  return (
    <div className="container">
      <h2>Product Management</h2>
      <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
      <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} />
      <button onClick={handleAddProduct}>Add Product</button>

      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
