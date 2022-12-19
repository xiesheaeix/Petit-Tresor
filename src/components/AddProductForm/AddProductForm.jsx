import { useState } from 'react';
// import * as itemsAPI from '../../utilities/items-api'

export default function AddProductForm({addProduct}) {
    const [newProduct, setNewProduct] = useState({
      name: "",
      images: [],
    //   category: "",
      price: 0,
      description: ""
    });
   
    function handleChange (evt) {
      setNewProduct({...newProduct, [evt.target.name]: evt.target.value });
    }

    async function handleAddProduct(evt) {
        evt.preventDefault();
        addProduct(newProduct);
        setNewProduct({
            name: "",
            images: [],
            // category: "",
            price: 0,
            description: ""
          });
      }
  
    return (
      <>
        <h1>Add New Product</h1>
        <form onSubmit={handleAddProduct}>
        <label>Name</label>
          <input
              name="name"
              type="text"
              value={newProduct.name}
              onChange={handleChange}
              required 
          />
        <label>images</label>
          <input
              name="images"
              type="text"
              value={newProduct.images}
              onChange={handleChange}
              required 
          />
        {/* <label>category</label>
          <select 
              name="category" 
              value={newProduct.category}
              onChange={handleChange}>
            <option value="Necklaces">Necklaces</option>
            <option value="Ring">Rings</option>
            <option value="Bracelets">Bracelets</option>
            <option value="Earrings">Earrings</option>
          </select>
           */}
        <label>Price</label>
          <input
              name="price"
              type="number"
              value={newProduct.price}
              onChange={handleChange}
              required 
          />
        <label>Description</label>
          <input
              name="description"
              type="text"
              value={newProduct.description}
              onChange={handleChange}
              required 
          />
          <button type="submit">Add Product</button>
        </form>
      </>
    );
  }