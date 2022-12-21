import './ProductListItem.css';
import {Link} from "react-router-dom";

export default function ProductListItem({ productItem, handleAddToOrder }) {
  return (
    <div className="ProductListItems">
      <div className="product-item-card">
        <Link to={`/api/items/${productItem._id}`}>
          <div className="product-img"><img className="item-img" src={`${productItem.images[0]}`} alt="" /></div>
        </Link>
        <div className="product-details">
          <p>{productItem.name}</p>
          <div className="buy">
            <span>${productItem.price}</span><br></br>
            <button className="btn-sm" onClick={() => handleAddToOrder(productItem._id)}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}