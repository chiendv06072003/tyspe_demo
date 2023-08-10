import { useState } from "react";

const AddProductPage = ({ addProduct }) => {
  const [data, setData] = useState({});
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...data, [name]: value };
    setData(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addProduct(data);
  };
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Enter Product Name"
          onChange={onHandleChange}
          name="name"
          defaultValue={""}
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          onChange={onHandleChange}
          name="price"
          defaultValue={""}
        />
        <input
          type="text"
          name="image"
          onChange={onHandleChange}
          placeholder="image"
        />
        <input
          type="text"
          name="description"
          onChange={onHandleChange}
          placeholder="desc"
        />
        <button>Add New</button>
      </form>
    </div>
  );
};

export default AddProductPage;
