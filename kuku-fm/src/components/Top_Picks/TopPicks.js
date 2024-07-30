import "./topPicks.css";

function TopPicks({ topPicks }) {
  return (
    <div className="logo-container">
      {topPicks.map((logo, index) => (
        <div key={index} className="box">
          <img className="logo" src={logo.icon} alt="logo" />
          <p className="title">{logo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TopPicks;
