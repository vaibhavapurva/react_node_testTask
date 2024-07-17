import React, { useEffect, useState } from 'react';
import OrderService from '../services/orderService';
import '../App.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    OrderService.getOrders().then(response => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Order Management</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            {order.user.username} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
