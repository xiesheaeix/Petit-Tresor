import { useState, useEffect} from "react";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import UpdateOrderForm from "../../components/UpdateOrderForm/UpdateOrderForm"
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './AdminPage.css'

export default function AdminPage({categories}) {
    const [allProducts, setAllProducts] = useState([]);
    const [allOrders, setAllOrders] = useState([]);


    useEffect(function() {
        async function getProducts() {
          const items = await itemsAPI.getAll();
          setAllProducts(items);
        }
        getProducts();

        async function getOrders() {
            const orders = await ordersAPI.getAllActiveOrders();
            setAllOrders(orders)
        }
        getOrders();
      }, []);
  
    async function updateOrder(orderData){
        console.log(orderData)
        const updatedOrder = await ordersAPI.updateOrder(orderData);
        setAllOrders([...allOrders, updatedOrder]);
    }

    async function addProduct(productData) {
        console.log(productData)
        const newProduct = await itemsAPI.createItem(productData);
        setAllProducts([...allProducts, newProduct]);
    }

    async function deleteProduct(itemId) {
        const products = await itemsAPI.removeItem(itemId);
        setAllProducts(products);
        window.location.reload(false);
    }

    return (
        <div className="admin-page">
            <h1>Admin Page</h1>
            <h2>All Available Products </h2>
            <div className="admin-products">
                {allProducts.map((product, idx) => (
                    <div key={idx}>{product.name}<br></br> 
                        <img src={`${product.images[0]}`} alt=""/><br></br> 
                        {/* <button>Edit</button> */}
                        <button onClick={() => deleteProduct(product._id)}>Delete Item</button>
                    </div>
                ))}
            </div>
            <AddProductForm addProduct={addProduct} categories={categories} />
            <h1>ACTIVE ORDERS</h1>
            <div className="orders">
                {allOrders.map((order, idx) => (
                        <div key={idx} className="order-info">
                            Order ID: {order.orderId}<br></br>
                            Ordered on: {new Date(order.updatedAt).toLocaleDateString()}<br></br>
                            Order Total: ${order.orderTotal}
                            {order.shipment.map((info, idx) => (
                                <div key={idx} className="shipment-info">
                                    <h3>Ship to:</h3>
                                    <p>
                                        {info.name}<br></br> 
                                        {info.address}<br></br> 
                                        {info.city},&nbsp;
                                        {info.state}&nbsp;
                                        {info.zip}
                                    </p>
                                </div>
                            ))}
                            <UpdateOrderForm updateOrder={updateOrder}/>
                        </div>
                    ))}
            </div>
        </div>
    );
}