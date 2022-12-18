import { useState } from 'react';

export default function AddProductForm() {
    const [newProduct, setNewProduct] = useState({
      name: "",
      images: [],
      category: "",
      price: 0,
      description: ""
    });
   
    function handleChange (evt) {
      const newProductData = {...newProduct, [evt.target.name]: evt.target.value };
      setNewProduct(newProductData);
    }
  
    return (
      <>
        <h1>New Product</h1>
        <form>
        {/* <form onSubmit={evt => handleAddProduct(evt, newProduct)}> */}
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
          <input
              name="category"
              type="text"
              value={newProduct.category}
              onChange={handleChange}
              required 
          />
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