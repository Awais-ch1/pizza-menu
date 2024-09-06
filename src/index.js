import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Down />
    </div>
  );
}

function Header() {
  return (
    <header className="header footer">
      <>
        <h1>Fast React Pizza co.</h1>
      </>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];           /// check the value if pizza value should be 0
  const NumPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {NumPizzas > 0 ? (
        <>
          <p>
            Iaitemtoc Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven. all orgainc. all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizze) => (
              <Pizza pizzaObje={pizze} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are still working on Pizza menu. please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
      /> */}
    </main>
  );
}
function Pizza({ pizzaObje }) {
  return (
    //
    <div className={`pizza ${pizzaObje.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObje.photoName} alt={pizzaObje.photoName} />
      <li>
        <h3>{pizzaObje.name}</h3>
        <p>{pizzaObje.ingredients}</p>
        {/* <span>{pizzaObje.price}</span> */}
        <span>{pizzaObje.soldOut ? "SOLD-OUUT" : pizzaObje.price}</span>
      </li>
    </div>
  );
}
function Down() {
  const hour = new Date().getHours();
  const openhour = 17; // PM   5:00
  const closehour = 23; // PM  11:00
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehour={closehour} openhour={openhour} />
      ) : (
        <p>
          We're welcome in between {openhour}:00 PM into {closehour}:00 PM
        </p>
      )}
    </footer>
  );
}
function Order({ openhour, closehour }) {
  return (
    <div className="order">
      <p>
        we're open {openhour}:00 PM to until {closehour}:00 PM come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
// Rendering Page
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
