import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleClick}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock, id) => {
        return <Stock 
                  stock={stock}
                  key={id}
                  handleClick={handleClick}
                  />
      })}
    </div>
  );
}

export default StockContainer;
