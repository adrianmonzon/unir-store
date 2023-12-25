import { Link } from "react-router-dom";
import logo from './../../logo.svg';
import './styles.css'

function Nav() {
    return (
        <nav className="menu">
            <Link to="/"><img src={logo} className="menu__logo" alt="logo" /></Link>
            <ul className="menu__items">
                <li><Link className="menu__item" to="/">Home</Link></li>
                <li><Link className="menu__item" to="/products">Products</Link></li>
                <li><Link className="menu__item" to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
