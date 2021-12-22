import React from 'react';
import data from './data';
import Product from "./components/Product";

function App() {
  return (
  <div className="grid-container">
            <header className="row">
                <div>
                    <a href="/" className="brand">Give-a-Cup</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign in</a>
                </div>
            </header>
            <main>
                <div className="row center">
                  {data.products.map((product) => (
                    <Product key={product._id} product={product} />
                    )
                  )}
                </div>
            </main>
            <footer className="row center">
                All rights reserved
            </footer>
        </div>
  )
}

export default App;
