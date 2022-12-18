import { useState, useRef, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import './HomePage.css';

export default function HomePage({handleAddToOrder}) {
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
      <Header />
      <CategoryList           
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat} 
      />
      <ProductList
        productItems={productItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
    </div>
  );
}