import "./vipShow.css";

function VipShow({ vipShows }) {
  return (
    <>
      <h5 className="heading">VIP Shows &gt;</h5>
      <div className="vip-show custom-scrollbar">
        {vipShows.map((item, index) => (
          <div className="show" key={index}>
            {item.is_coin_based ? (
              <p className="vip-tag">VIP</p>
            ) : (
              <p className="non-vip"></p>
            )}
            <img className="show-poster" src={item.image} alt="show" />
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default VipShow;
