import "./styles.css"
import {CartContext} from "../../context/CartContext";
import {useContext} from "react";
import Message from "../../components/Message/Message";
import Button from "../../components/Button/Button";
import useRedirection from "../../hooks/useRedirection";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
    let { cart, setCart } = useContext(CartContext);
    const redirect = useRedirection("/", 1000);

    const placeOrder = () => {
        alert("Nice! Your order has been requested :)");
        setCart([]);
        redirect();
    };

    return (
        <section className="cart">
            {
                cart.length ?
                    <div className="cart__items">
                        {cart.map(el => <CartItem key={el.id} id={el.id} image={el.image} title={el.title} description={el.description} price={el.price} />)}

                    </div>
                    : <Message content="Cart is empty :(" />
            }
            {
                cart.length ?
                    <div className="cart__payment">
                        Total amount: {cart.map(el => el.price).reduce((partialSum, a) => partialSum + a, 0).toFixed(2)} €
                        <Button title="Place order" method={placeOrder} />
                    </div>
                    : <></>
            }
        </section>
    )
}

export default Cart