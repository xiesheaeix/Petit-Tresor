import { useState } from 'react';

export default function AddProductForm({addProduct, categories}) {
    const [newProduct, setNewProduct] = useState({
      name: "",
      images: [],
      // category: {categories},
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
            // category: {categories},
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
            {categories.map ((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select> */}
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