import { DATA } from "./flights.js";
import { useEffect, useState } from "react";
import "./App.css";

import StatusFilter from "./components/StatusFilter/StatusFilter";
import Tickets from "./components/Tickets/Tickets";

function App() {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState(0);
  const [company, setCompany] = useState(0);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(1000000);
  const [tickets, setTickets] = useState(DATA[0].result.flights);

  useEffect(() => {
    let temp = [...DATA[0].result.flights];
    let arr = [];
    if (sort === "priceUp") {
      arr = temp.sort(
        (a, b) =>
          Number(a.flight.price.total.amount) -
          Number(b.flight.price.total.amount)
      );
    } else if (sort === "priceDown") {
      arr = temp.sort(
        (a, b) =>
          Number(b.flight.price.total.amount) -
          Number(a.flight.price.total.amount)
      );
    } else if (sort === "time") {
      arr = temp.sort(
        (a, b) =>
          Number(a.flight.legs[0].duration + a.flight.legs[1].duration) -
          Number(b.flight.legs[0].duration + b.flight.legs[1].duration)
      );
    } else {
      arr = temp;
    }

    if (company === 1) {
      arr = temp.filter((item) => item.flight.carrier.uid === "LO");
    } else if (company === 2) {
      arr = temp.filter((item) => item.flight.carrier.uid === "SU1");
    } else if (company === 3) {
      arr = temp.filter(
        (item) =>
          item.flight.carrier.uid === "SU1" || item.flight.carrier.uid === "LO"
      );
    }

    // if (filter === 1) {
    //   arr = arr.filter(
    //     (item) =>
    //       item.flight.legs[0].segments.length +
    //         item.flight.legs[1].segments.length ===
    //       4
    //   );
    // } else if (filter === 2) {
    //   arr = arr.filter(
    //     (item) =>
    //       item.flight.legs[0].segments.length +
    //         item.flight.legs[1].segments.length ===
    //         3 || 2
    //   );
    // } else {
    //   arr = temp;
    // }

    arr = arr.filter(
      (item) =>
        Number(item.flight.price.total.amount) >= priceFrom &&
        Number(item.flight.price.total.amount) <= priceTo
    );

    setTickets(arr);
  }, [sort, company, priceFrom, priceTo, filter]);

  return (
    <main className="app container">
      <StatusFilter
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
        priceFrom={priceFrom}
        setPriceFrom={setPriceFrom}
        priceTo={priceTo}
        setPriceTo={setPriceTo}
        company={company}
        setCompany={setCompany}
      />
      <Tickets tickets={tickets} />
    </main>
  );
}

export default App;
