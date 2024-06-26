import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function BuyPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://e-commerce-rcaq.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des produits", error)
      );
  }, []);

  return (
    <>
      <Header />
      <div className="buypage bg-[#38383B] text-white flex flex-col gap-10 pt-24">
        <div className="content ">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
            Nos plantes
          </h1>
        </div>
        <div className="plant md:px-12 px-5 flex flex-col justify-center gap-10">
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {loading ? (
<p>Chargement en cours ! Ne partez pas, attendez on est bon dans moins 5 minutes s'il vous plaît.</p>
            ) : (
              products.map((product, index) => (
                <Link
                  to={`/achat?image_src=${encodeURIComponent(
                    product.image_src
                  )}&name=${encodeURIComponent(
                    product.name
                  )}&price=${encodeURIComponent(product.price)}`}
                >
                  <li
                    key={index}
                    className="flex flex-col gap-2 text-center text-xl cursor-pointer"
                  >
                    <img src={product.image_src} alt="" />
                    <h2>{product.name}</h2>
                    <p>A partir de {product.price},00€</p>
                  </li>
                </Link>
              ))
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BuyPage;
