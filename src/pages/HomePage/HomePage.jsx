import { useState, useRef, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import './HomePage.css';
import AdminPage from '../AdminPage/AdminPage';

export default function HomePage({ user, handleAddToOrder}) {
  const [productItems, setProductItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setProductItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, []);

  return (
    <div className="HomePage">
      {user.admin ? <AdminPage categories={categoriesRef.current}/> : <>      
      <Header />
      <CategoryList           
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat} 
      />
      <ProductList
        productItems={productItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      /></>}
    </div>
  );
}