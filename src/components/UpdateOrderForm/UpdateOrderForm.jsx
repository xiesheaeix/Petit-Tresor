import {useState} from 'react';

export default function UpdateOrderForm({updateOrder}) {
    const [orderData, setOrderData] = useState({
        checkbox: false,
        trackingNum: "",
    })

    function handleChange(evt) {
        const val = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        setOrderData({
          ...orderData,
          [evt.target.name]: val
        });
      }

    function handleUpdateOrder(evt) {
        evt.preventDefault();
        updateOrder(orderData);
    }

    return (
        <form onSubmit={handleUpdateOrder}>
        <label>Order Shipped?</label>
        <input type="checkbox"
                name="checkbox" 
                value={orderData.checkbox}
                onChange={handleChange}
                required
        />
        <label>Tracking Number</label>
        <input type="text" 
                name="trackingNum" 
                value={orderData.trackingNum}
                onChange={handleChange}
                required 
        />
        <button type="submit">Submit</button>
    </form> 

    );
}   
    
