import { useParams } from "react-router-dom";

const DetailPage = ({ products }) => {
  const { id } = useParams();
  const current = products.find((item) => item.id == Number(id));
  return (
    <div>
      <img src={current?.image} alt="" />
      <p>
        <span>Name:</span>
        {current?.name}
      </p>
      <p>
        <span>Price:</span>
        {current?.price}
      </p>
      <p>
        <span>Description:</span>
        {current?.description}
      </p>
    </div>
  );
};

export default DetailPage;
