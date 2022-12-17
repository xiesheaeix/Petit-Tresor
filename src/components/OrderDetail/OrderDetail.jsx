import LineItem from "../LineItem/LineItem";
import './OrderDetail.css'

export default function OrderDetail({ order, handleChangeQty }) {

    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
      />
    );
  
    return (
      <div className="OrderDetail">
        <div className="section-heading">
          {/* <h1>Cart</h1> */}
          {/* {order.isPaid ?
            <span>ORDER <span className="smaller">{order.orderId}</span></span>
            :
            <span>NEW ORDER</span>
          } */}
          <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
        </div>
        <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
          {lineItems.length ?
            <>
              {lineItems}
              <section className="total">
                <span>{order.totalQty}</span>
                <span className="right">Total: ${order.orderTotal.toFixed(2)}</span>
                <br></br>
                {order.isPaid ?
                  <span className="right">TOTAL&nbsp;&nbsp;</span>
                  :
                  <button
                    className="btn-sm"
                    // onClick={() => navigate('/cart/checkout')}
                    disabled={!lineItems.length}
                  >CHECKOUT</button>
                }
              </section>
            </>
            :
            <div className="hungry">Get yourself a little something </div>
          }
        </div>
      </div>
    );
  }