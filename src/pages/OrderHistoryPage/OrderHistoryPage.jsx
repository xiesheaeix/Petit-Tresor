import { useState, useEffect } from 'react';
import './OrderHistoryPage.css';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';


export default function OrderHistoryPage({user, setUser}) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      console.log(orders);
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);


  return (
    <>
      <h1>OrderHistoryPage</h1>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />
    </>
  );
}