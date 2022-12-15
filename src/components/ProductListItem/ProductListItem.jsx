import './ProductListItem.css';

export default function ProductListItem({ productItem }) {
  return (
    <div className="ProductListItems">

      {/* {productItem.images.map((url, idx) => (
        <div key={idx} className="product-imgs"><img src={`${url}`} alt="" /></div>
      ))} */}
      <div className="product-item-card">
          <div className="product-img"><img  className="item-img" src={`${productItem.images[0]}`} alt="" /></div>
        <div className="product-details">
          <p>{productItem.name}</p>
          <p>$ {productItem.price}</p>
        </div>
      </div>
      {/* <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div> */}
    </div>
  );
}