import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import PLP from './views/PLP/PLP'
import {CartProvider} from "./context/CartContext";
import Cart from "./views/Cart/Cart";
import Home from "./views/Home/Home";

function App() {
  return (
      <BrowserRouter>
          <CartProvider>
            <div className="app">
              <section className="app__nav">
                  <Nav />
              </section>
              <section className="app__main">
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/cart" element={<Cart />} />
                          <Route path="/products" element={<PLP />} />
                      </Routes>
              </section>
              <section className="app__footer">
                  <Footer />
              </section>
            </div>
          </CartProvider>
      </BrowserRouter>
  );
}

export default App;
