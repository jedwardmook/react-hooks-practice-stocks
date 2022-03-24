import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, handleClick}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {myStocks.map((myStock, id) => {
        return <Stock
                  stock={myStock}
                  key={id}
                  handleClick={handleClick}
                  />
      })
      }
    </div>
  );
}

export default PortfolioContainer;
