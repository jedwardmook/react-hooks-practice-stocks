import React from "react";

function Stock({stock, handleClick}) {
  const {name, price, ticker, type} = stock


  return (
    <div>
      <div className="card" onClick={() => handleClick(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}:{price}</p>
          <h6>{type}</h6>
        </div>
      </div>
    </div>
  );
}
export default Stock;
