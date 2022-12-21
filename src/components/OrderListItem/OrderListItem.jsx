import './OrderListItem.css'

export default function OrderListItem({ order, activeOrder, setActiveOrder }) {
    return (

      <div
        className={`OrderListItem ${order === activeOrder ? 'selected' : ''}`}
        onClick={() => setActiveOrder(order)}
        >
        {order.shipment.map((data, idx) => (
        <div key={idx}>
            <h1>Shipped to:</h1>
            <p>{data.name}</p> 
            <p>{data.address}<br></br>{data.city}, {data.state}<br></br>{data.zip}</p>
        </div>))}
        <div>
          <div>Order Id: <span className="smaller">{order.orderId}</span></div>
          <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
        </div>
        <div className="align-rt">
          <div>${order.orderTotal.toFixed(2)}</div>
          <div className="smaller">{order.orderQty} Item{order.orderQty > 1 ? 's' : ''}</div>
        </div>
      </div>
    );
  }