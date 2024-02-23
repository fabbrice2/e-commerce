import React, { useState } from "react";
import "../css/input.css";
import "../css/output.css";
import "../css/achat.css";
import { useLocation } from "react-router-dom";
import Header from "./Header";
// import { Navigate } from "react-router-dom";

function Achat() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const image_src = searchParams.get("image_src");
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  const [cart, setCart] = useState([]);

  // function AddToBasket() {
  //   cart.push({
  //     name: name,
  //     image_src: image_src,
  //     price: price,
  //   });
  //   console.log(cart);
  // }
  const AddToBasket = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image_src: image_src,
        price: price,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("successfully", data);
        // window.location.href = "/cart";
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="achat bg-[#38383B]">
      <Header />
      <div className="product text-white p-20 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="img">
          <h1 className="navigate flex items-center mb-4">
            <a href="/buypage">Boutique</a>
            <span class="material-icons">navigate_next</span>
            <a href="">{decodeURIComponent(name)}</a>
          </h1>
          <img
            className="max-w-full h-auto"
            src={decodeURIComponent(image_src)}
            alt={name}
          />
        </div>
        <div className="productinfo flex flex-col items-center gap-10">
          <h2 className="text-center text-xl md:text-3xl lg:text-4xl ">
            {decodeURIComponent(name)}
          </h2>
          <span>{decodeURIComponent(price)}</span>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col gap-3 items-center selection">
            <label htmlFor="taille">Taille:</label>
            <select
              name="pets"
              id="pet-select"
              className="border-2 bg-[#38383B] p-3"
            >
              <option value="">Selectionnez la taille</option>
              <option value="dog">Petit</option>
              <option value="cat">Moyen</option>
              <option value="hamster">Grand</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 items-center quantity">
            <label htmlFor="quantity">Quantité:</label>
            <input
              type="number"
              name=""
              id=""
              placeholder="1"
              className="bg-[#38383B] border-2 p-2"
            />
          </div>
          <button
            onClick={AddToBasket}
            className="sm:px-12 py-4 px-8 bg-[#A8A6A1] duration-300"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Achat;
