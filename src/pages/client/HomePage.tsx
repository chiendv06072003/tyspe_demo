import { Link } from "react-router-dom";

const HomePage = ({ products }: any) => {
  return (
    <>
      <h1>Home Page</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {products.map((item, index) => {
          return (
            <div key={index + 1} style={{ margin: "auto" }}>
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
