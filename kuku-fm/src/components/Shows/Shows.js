import React, { forwardRef } from "react";
import "./Shows.css";
import Card from "./Card/Card";

// const Shows = forwardRef(({ data }, ref) => {
//   return (
//     <div className="show" ref={ref}>
//       {/* Render your show data here */}
//       <h3>{data.title}</h3>
//       {/* Add more data as needed */}
//     </div>
//   );
// });

const Shows = forwardRef(({ data }, ref) => {
  console.log("Data is : ", data);
  return (
    <div ref={ref}>
      <h5 className="heading">{data.title} &gt;</h5>
      <div className="show-container custom-scrollbar">
        {data.shows.map((item, index) => (
          <div className="card" key={index}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Shows;
