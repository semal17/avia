import { DATA } from "./flights.js";
import { useEffect, useState } from 'react';
import "./App.css";

import StatusFilter from "./components/StatusFilter/StatusFilter";
import Tickets from "./components/Tickets/Tickets";

function App() {
  const [sort, setSort] = useState('time');
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
    console.log(sort);
  }, [sort]); 

  
  return (
    <main className="app container">
      <StatusFilter sort={sort} setSort={setSort}  />
      <Tickets tickets={tickets} />
    </main>
  );
}

export default App;
