import "./Card.css";

function Card({ item }) {
  return (
    <>
      {item.is_coin_based ? (
        <p className="vip-tag">VIP</p>
      ) : (
        <p className="non-vip"></p>
      )}
      <img className="poster" src={item.image} alt={item.title} />
      <p className="title">{item.title}</p>
    </>
  );
}

export default Card;
