import { useState, useEffect } from 'react';
import './OrderHistoryPage.css';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function OrderHistoryPage({ handleChangeQty }) {
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
    <div className='order-history'>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />
      <OrderDetail order={activeOrder} handleChangeQty={handleChangeQty}/>
    </div>
    </>
  );
}