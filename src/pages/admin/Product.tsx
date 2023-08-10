import { Link } from "react-router-dom";

const ProductPage = ({ products, removeProduct }) => {
  const onHandleRemove = (id) => {
    console.log("Product: ", id);
    removeProduct(id);
  };
  return (
    <div>
      <Link to={`/admin/product/add`}>
        <button>Add New Product</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Desc</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <img src={item.image} />
                </td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => onHandleRemove(item.id)}>
                    Delete
                  </button>
                  <Link to={`/admin/product/update/${item.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
