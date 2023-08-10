import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  DetailPage,
  PageProduct,
  ProductPage,
  HomePage,
  AddProductPage,
  UpdateProduct,
} from "./pages";

import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/WebsiteLayout";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const removeProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    }).then(() => setProducts(products.filter((item) => item.id != id)));
  };
  const addProduct = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };
  const onUpdate = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage products={products} />} />
          <Route
            path="productpage"
            element={<PageProduct products={products} />}
          />
          <Route
            path="detail/:id"
            element={<DetailPage products={products} />}
          />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="product">
            <Route
              index
              element={
                <ProductPage
                  products={products}
                  removeProduct={removeProduct}
                />
              }
            />
            <Route
              path="add"
              element={<AddProductPage addProduct={addProduct} />}
            />
            <Route
              path="update/:id"
              element={
                <UpdateProduct onUpdate={onUpdate} products={products} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
