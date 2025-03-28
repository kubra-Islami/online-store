import React from 'react'
import {useCartStore} from "../store/cartStore.jsx";

const Checkout = () => {
    const {cart, clearCart} = useCartStore();

    if (cart.length === 0) {
        return <p>The shopping cart is empty!</p>
    }

    return (
        <div>
            <h2>Payment was successful!</h2>
            <p>Thanks for buying</p>
            <button onClick={clearCart}>Back to homework</button>
        </div>
    )
}

export default Checkout;