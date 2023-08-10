import { Link } from "react-router-dom";

const PageProduct = ({ products }) => {
  return (
    <>
      <h1>Product Page</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {products.map((item, index) => {
          return (
            <div style={{ margin: "auto" }}>
              <div>
                <img src={item.image} alt="" />
                <p>
                  <span style={{ color: "red" }}>Name:</span>
                  {item.name}
                </p>
                <p>
                  <span>Price:</span>
                  {item.price}
                </p>
                <Link to={`/detail/${item.id}`}>
                  <button>Detail</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PageProduct;
