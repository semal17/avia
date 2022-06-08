
import { DATA } from "./flights.js";
import {sortByField, sortByCompany, sortBySegments, sortByPrice} from "./utils/filters";
import React, { useEffect, useState } from "react";
import "./App.css";

import StatusFilter from "./components/StatusFilter/StatusFilter";
import Tickets from "./components/Tickets/Tickets";

export const MyContext = React.createContext();

function App() {
  const [sort, setSort] = useState("price-asc");
  const [count, setCount] = useState(2);
  const [segments, setSegments] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(1000000);
  const [tickets, setTickets] = useState(DATA[0].result.flights);

  useEffect(() => {
    let arr;

    arr = sortByField(DATA[0].result.flights, sort)
    arr = sortByCompany(arr, companies)
    arr = sortBySegments(arr, segments)
    arr = sortByPrice(arr, priceFrom, priceTo)

    setTickets(arr);
  }, [sort, companies, priceFrom, priceTo, segments]);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <main className="app container">
        <StatusFilter
          sort={sort}
          setSort={setSort}
          segments={segments}
          setSegments={setSegments}
          priceFrom={priceFrom}
          setPriceFrom={setPriceFrom}
          priceTo={priceTo}
          setPriceTo={setPriceTo}
          companies={companies}
          setCompanies={setCompanies}
        />
        <Tickets tickets={tickets} />
      </main>
    </MyContext.Provider>
  );
}

export default App;
