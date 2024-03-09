const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USERNAME = process.env.DB_USERNAME || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_DBNAME = process.env.DB_DBNAME || "react_ecommerce";

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DBNAME,
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.get("/products", (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Erreur du serveur");
    } else {
      res.json(results);
    }
  });
});

let cart= [];

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.post("/cart", (req, res) => {
  const newcart = {
    ...req.body
  };
  cart.push(newcart);
  res.status(201).json(newcart);
});

app.listen(PORT, () => {
  console.log(`Server ecoutant sur le port ${PORT}`);
});
