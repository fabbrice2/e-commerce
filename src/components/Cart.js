import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { RxCross2 } from "react-icons/rx";

function Cart() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    fetch("https://e-commerce-rcaq.onrender.com/cart")
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * count,
    0
  );

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count === 1) {
      setDisable(true);
    } else {
      setCount(count - 1);
    }
  };

  // function removeProduct() {
  //   this.parentNode.removeChild(this);

  //   var index = cart.indexOf(this);
  //   cart.splice(index, 1);
  // }

  return (
    <div className=" bg-[#38383B] text-white">
      <Header />
      {/* <div className="flex flex-col items-start gap-14 px-12 pt-32">
        <h1>Panier</h1>
        <p>Votre panier est vide.</p>
        <button className="sm:px-12 py-4 px-8 bg-[#A8A6A1] duration-300">
          Poursuivre vos achat
        </button>
      </div> */}
      <div className="flex flex-col items-end pt-32 p-20">
        {cart.map((product) => (
          <ul
            key={product.id}
            className="flex justify-between border-b py-5 w-full"
          >
            <div className="flex items-start gap-5">
              <li className="">
                <img
                  className="w-[110px] h-[100px] object-cover"
                  src={product.image_src}
                  alt=""
                />
              </li>
              <div className="flex flex-col gap-2">
                <li>{product.name}</li>
                <li className="text-sm">Taille : Moyen</li>
              </div>
            </div>
            <div className="flex gap-32 items-center">
              <div className="flex items-center gap-3">
                <button
                  className="text-2xl font-semibold"
                  Disable={disable}
                  onClick={decrementCount}
                >
                  -
                </button>
                <span className="text-xl">{count}</span>
                <button
                  className="text-2xl font-semibold"
                  onClick={incrementCount}
                >
                  +
                </button>
              </div>
              <div className="flex items-center gap-3">
                <li>{(product.price * count).toFixed(2)} €</li>
                <li className="cursor-pointer">
                  <RxCross2 />
                </li>
              </div>
            </div>
          </ul>
        ))}
        <div className="flex flex-col gap-5 mt-10 w-80">
          <ul className="flex justify-between">
            <li>Sous-total</li>
            <li>{totalPrice.toFixed(2)} €</li>
          </ul>
          <a href="/checkout">
            <button className="sm:px-12 py-4 px-8 bg-[#A8A6A1] duration-300 w-full">
              Paiement
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
