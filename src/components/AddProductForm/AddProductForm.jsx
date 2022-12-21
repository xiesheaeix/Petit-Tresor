import { useEffect } from 'react';
import { useState } from 'react';

export default function AddProductForm({addProduct, categories}) {
    const [newProduct, setNewProduct] = useState({
      name: "",
      images: [],
      category: "",
      price: 0,
      description: ""
    });

    useEffect(function() {
      if (!categories.length) return;
      setNewProduct({...newProduct, category: categories[0]});
     }, [categories]);
   
    function handleChange (evt) {
      setNewProduct({...newProduct, [evt.target.name]: evt.target.value });
    }

    async function handleAddProduct(evt) {
        evt.preventDefault();
        addProduct(newProduct);
        setNewProduct({
            name: "",
            images: [],
            category: "",
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
        <label>category</label>
          <select 
              name="category" 
              value={newProduct.category}
              onChange={handleChange}>
            {categories.map ((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
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