import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import CartDetail from '../../components/CartDetail/CartDetail';
import { getUser } from '../../utilities/users-service';
import './App.css';
import CheckOutPage from '../CheckOutPage/CheckOutPage';
import AdminPage from '../AdminPage/AdminPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);
  const [showCart, setShowCart] = useState(false);
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
    await ordersAPI.checkout(orderData);
    navigate('/orders');
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar setUser={setUser} showCart={showCart} setShowCart={setShowCart} order={cart}/>
            <Routes>
              <Route path="/orders/new" element={<HomePage user={user} handleAddToOrder={handleAddToOrder}/>} />
              <Route path="/orders" element={<OrderHistoryPage user={user} handleChangeQty={handleChangeQty} />} />
              <Route path="/api/items/:itemId" element={<ProductDetailPage handleAddToOrder={handleAddToOrder}/>} />
              <Route path="/cart/checkout" element={<CheckOutPage               
                                                    order={cart}
                                                    handleChangeQty={handleChangeQty}
                                                    handleCheckout={handleCheckout} />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/*" element={<Navigate to="/orders/new" />} />
            </Routes>
            {showCart && 
              <CartDetail
                user={user}
                order={cart}
                handleChangeQty={handleChangeQty}
              />
            }
            <Footer user={user}/>
          </>
         :
         <>
         <AuthPage setUser={setUser} />
         </>
      }
    </main>
  );
}
