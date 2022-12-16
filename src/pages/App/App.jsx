import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { getUser } from '../../utilities/users-service';
import './App.css';
import CheckOutPage from '../CheckOutPage/CheckOutPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);
  const [showCart, setShowCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout(evt, orderData) {
    evt.preventDefault();
    console.log(orderData);
    await ordersAPI.checkout(orderData);
    navigate('/orders');
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} showCart={showCart} setShowCart={setShowCart} />
            <Routes>
              <Route path="/orders/new" element={<HomePage  handleAddToOrder={handleAddToOrder}/>} />
              <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
              <Route path="/api/items/:itemId" element={<ProductDetailPage handleAddToOrder={handleAddToOrder}/>} />
              <Route path="/cart/checkout" element={<CheckOutPage               
                                                    order={cart}
                                                    handleChangeQty={handleChangeQty}
                                                    handleCheckout={handleCheckout} />} />
              <Route path="/*" element={<Navigate to="/orders/new" />} />
            </Routes>
            {showCart && 
              <OrderDetail 
              order={cart}
              handleChangeQty={handleChangeQty}
              />
            }
            <Footer />
          </>
         :
         <AuthPage setUser={setUser} />
      }
    </main>
  );
}
