import { useState, useEffect } from "react";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import * as itemsAPI from '../../utilities/items-api';
import './AdminPage.css'

export default function AdminPage() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(function() {
        async function getProducts() {
          const items = await itemsAPI.getAll();
          setAllProducts(items);
        }
        getProducts();
      }, []);

    return (
        <div className="admin-page">
            <h1>Admin Page</h1>
            <h2>All Available Products </h2>
            <div className="admin-products">
                {allProducts.map((product, idx) => (
                    <div key={idx}>{product.name}<br></br> 
                        <img src={`${product.images[0]}`} alt=""/><br></br> 
                        <button>Edit</button>
                        <button>Delete Item</button>
                    </div>
                ))}
            </div>
            <AddProductForm/>
        </div>
    );
}