import "./styles.css"
import Button from "../Button/Button";
import {CartContext} from "../../context/CartContext";
import {useContext} from "react";
const CartItem = ({ id, title, image, price }) => {
    const { addToCart, cart, removeFromCart } = useContext(CartContext);

    return (
        <>
            <section className="cartItem">
                <ul className="cartItem__left">
                    <li>
                        {title}
                    </li>
                    <div className="cartItem__bottom">
                        <Button title={cart.find(el => el.id === id) ? "Remove" : "Add to cart"} method={cart.find(el => el.id === id) ? () => removeFromCart(id) : () => addToCart({title, id, image, price})} />
                        <p>
                            {price} €
                        </p>
                    </div>
                </ul>
                <ul className="cartItem__right">
                    <li>
                        <img className="cartItem__image" src={image} alt={title} />
                    </li>

                </ul>
            </section>
            <hr />
        </>
    )
}

export default CartItem