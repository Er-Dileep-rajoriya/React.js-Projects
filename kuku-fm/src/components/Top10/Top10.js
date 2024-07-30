import "./top10.css";

function Top10({ top10 }) {
  return (
    <>
      <h5 className="heading">Top 10 in India</h5>
      <div className="top10 custom-scrollbar">
        {top10.map((item, index) => (
          <div className="show" key={index}>
            {item.is_coin_based ? (
              <p className="vip-tag">VIP</p>
            ) : (
              <p className="non-vip"></p>
            )}
            <img className="show-poster" src={item.image} alt="show" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Top10;
