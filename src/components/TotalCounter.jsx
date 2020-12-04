import React from "react";


function TotalCounter({ title, color, total }) {

  return (
      <div className="total-box" style={{borderColor: color}}>
      <h1 className="total-title">{title}</h1>
      <p className="total-num" >{total}</p>
      </div>
  );
}


export default TotalCounter;
