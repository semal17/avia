import { DATA } from "./flights.js";
import { useEffect, useState } from 'react';
import "./App.css";

import StatusFilter from "./components/StatusFilter/StatusFilter";
import Tickets from "./components/Tickets/Tickets";

function App() {
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState(0);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(1000000);
  const [tickets, setTickets] = useState(DATA[0].result.flights);
  
  useEffect(() => {
    let temp = [...tickets];
    if(sort === 'priceUp') {      
      setTickets(temp.sort((a,b) => Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount)));
    } else if (sort === 'priceDown') {     
      setTickets(temp.sort((a,b) => Number(b.flight.price.total.amount) - Number(a.flight.price.total.amount)));
    } else if (sort === 'time') {      
      setTickets(temp.sort((a,b) => Number(a.flight.legs[0].duration + a.flight.legs[1].duration) - Number(b.flight.legs[0].duration + b.flight.legs[1].duration)));
    } else {      
      setTickets(temp);
    }

// console.log(tickets[0].flight.price.total.amount >= priceFrom);
// console.log(priceTo);
// console.log(tickets[0].flight.price.total.amount);
// console.log(Number(tickets[0].flight.price.total.amount) <= priceTo);
    setTickets(temp.filter(item => Number(item.flight.price.total.amount) >= priceFrom && Number(item.flight.price.total.amount) <= priceTo));
    
  }, [sort, priceFrom, priceTo]); 


  // useEffect(() => {
  //   let temp = [...tickets];  
  //   if(filter === 1) {      
  //     setTickets(temp.filter(item => item.flight.legs[0].segments.length + item.flight.legs[1].segments.length === 4));
  //     // console.log(tickets[0].flight.legs[0].segments.length + tickets[0].flight.legs[1].segments.length);
      
  //   } else if (filter === 2) {     
  //     setTickets(temp.filter(item => item.flight.legs[0].segments.length + item.flight.legs[1].segments.length === 3 || 2));
      
  //   }  else {      
  //     setTickets(temp);     
  //   }
    
  // }, [filter]); 
  // console.log(typeof(priceFrom));
  
  return (
    <main className="app container">
      <StatusFilter sort={sort} setSort={setSort} filter={filter} setFilter={setFilter} priceFrom={priceFrom} setPriceFrom = {setPriceFrom} priceTo={priceTo} setPriceTo={setPriceTo} />
      <Tickets tickets={tickets} />
    </main>
  );
}

export default App;
