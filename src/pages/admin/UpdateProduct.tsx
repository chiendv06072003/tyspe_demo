import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = ({ products, onUpdate }) => {
  const { id } = useParams();
  const currentProduct = products.find((item) => item.id == id);
  const [inputValues, setInputValues] = useState([]);
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const dataUpdate = { ...inputValues, id: id };
    onUpdate(dataUpdate);
  };
  return (
    <div>
      <h1>Update Product</h1>
      <form className="custom-form" onSubmit={onHandleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={currentProduct?.name}
          onChange={onHandleChange}
        />

        <label htmlFor="Price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          defaultValue={currentProduct?.price}
          onChange={onHandleChange}
        />

        <label htmlFor="Image">Image:</label>
        <input
          type="text"
          name="image"
          defaultValue={currentProduct?.image}
          onChange={onHandleChange}
        />

        <label htmlFor="Description">Description:</label>
        <input
          type="text"
          name="description"
          defaultValue={currentProduct?.description}
          onChange={onHandleChange}
        />
        <label htmlFor="categoryId">Categpry ID:</label>
        <input
          type="text"
          name="categoryId"
          defaultValue={currentProduct?.categoryId}
          onChange={onHandleChange}
        />
        <button type="submit" className="custom-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
