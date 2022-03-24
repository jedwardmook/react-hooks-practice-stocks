import React, { useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";



// Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

// Allow a user to filter stocks based on the type of the stock.



function MainContainer() {
  const API = "http://localhost:3001/stocks"
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [filterBy, setFilterBy] = useState('All')


  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(stockData => {
        setStocks(stockData)
      })
  }, [])

  useEffect(() => {
    if(sortBy === "Alphabetically"){
      const sortedStocks = sortByName()
      setStocks(sortedStocks)
    }else{
      const sortedStocks = sortByPrice()
      setStocks(sortedStocks)
    }
  }, [sortBy])

  function sortStocks(e){
    setSortBy(e.target.value)
  }

  function filterStocks(e){
    setFilterBy(e.target.value)
  }

  function handlePurchased(stock){
    if(!myStocks.includes(stock)){
    const updateMyStocks = [...myStocks, stock]
    setMyStocks(updateMyStocks)
    }
  }

  function handleSale(stock){
    const updateMyStocks = [...myStocks].filter(myStock => myStock.id !== stock.id)
    setMyStocks(updateMyStocks)
  }

  function sortByName(){
    return [...stocks].sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  }

  function sortByPrice(){
    return [...stocks].sort(function (a, b) {
      return a.price - b.price;
    });
  }

const filteredStocks = stocks.filter(stock => {
  if(filterBy === "All")
    return stocks
  else 
    return stock.type === filterBy
})


  return (
    <div>
      <SearchBar 
          sortStocks={sortStocks}
          sortBy={sortBy}
          filterStocks={filterStocks}
          filterBy={filterBy}
        />
      <div className="row">
        <div className="col-8">
          <StockContainer 
              stocks={filteredStocks}
              handleClick={handlePurchased}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
              myStocks={myStocks}
              handleClick={handleSale}
           />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
