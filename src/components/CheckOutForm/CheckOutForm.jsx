import { useState } from "react";

export default function CheckOutForm({handleCheckout}) {
    const [checkoutForm, setCheckoutForm] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });

    function handleChange (evt) {
        const checkOutData = {...checkoutForm, [evt.target.name]: evt.target.value};
        setCheckoutForm(checkOutData);
    }

    return (
        <form className="checkout-form" onSubmit={(evt) => handleCheckout(evt, checkoutForm)}>
            <label>Full Name</label>
            <input type="text"
                name="name"
                value={checkoutForm.name}
                onChange={handleChange} 
                required
            />
            <label>Address</label>
            <input type="text"
                name="address"
                value={checkoutForm.address} 
                onChange={handleChange}
                required
            />
            <label>City</label>
            <input type="text"
                name="city"
                value={checkoutForm.city} 
                onChange={handleChange}
                required
            />
            <label>State</label>
            <input type="text"
                name="state"
                value={checkoutForm.state} 
                onChange={handleChange}
                required
            />
            <label>Zip</label>
            <input type="number"
                name="zip"
                value={checkoutForm.zip}
                onChange={handleChange} 
                required
            />
            <button
                className="btn-sm"
                type="submit"
                >CHECKOUT
            </button>
    </form>
    );

}