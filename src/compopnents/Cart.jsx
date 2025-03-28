import React from "react";
import {useCartStore} from "../store/cartStore.jsx";

import {Link} from "react-router-dom";


const Cart = () => {
    const {cart, removeFromCart} = useCartStore();

    const totalPrice = cart.reduce((total, item) => {
        total += item.price
    }, 0);
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>The shopping cart is empty!</p>
            ) : (
                <>
                    <ul>
                        {
                            cart.map((item) => (
                                <li key={item.id}>
                                    {item.name} - {item.price}$
                                    <button onClick={() => removeFromCart(item.id)}>delete</button>
                                </li>
                            ))
                        }
                    </ul>

                <p>{totalPrice} :{totalPrice}</p>
                    <Link to="/ckeckout">
                        <button>Checkout</button>
                    </Link>
                </>
            )}
        </div>
    )
}

export default Cart;