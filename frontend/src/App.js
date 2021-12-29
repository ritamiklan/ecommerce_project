import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="/" className="brand">
              Give-a-Cup
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="product/:id" element={<ProductScreen />} />
          </Routes>
        </main>
        <footer className="row center">
          <p>Photos by <a href="https://unsplash.com/@emmafaithcreative">Emma Smith</a>,  <a href="https://unsplash.com/@jarson">Jarek Ceborski</a>, <a href="https://unsplash.com/@gtk1x">Gerson Cifuentes</a>, and <a href="https://unsplash.com/@conorsexton">Conor Sexton</a> on Unsplash</p></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
