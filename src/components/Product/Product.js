import "./styles.css"
import Button from "../Button/Button";
import {CartContext} from "../../context/CartContext";
import {useContext} from "react";
const Product = ({ id, title, image, description, price }) => {
    const { addToCart, cart, removeFromCart } = useContext(CartContext);

    return (
      <ul className="product">
          <li>
              {title}
          </li>
          <li>
              <img className="product__image" src={image} alt={title} />
          </li>
          <li>
              {price} €
          </li>
          <li>
              <Button title={cart.find(el => el.id === id) ? "Remove from cart" : "Add to cart"} method={cart.find(el => el.id === id) ? () => removeFromCart(id) : () => addToCart({title, id, image, price})} />
          </li>
      </ul>
    )
}

export default Product