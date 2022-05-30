import { DATA } from "./flights.js";
import { useState } from 'react';
import "./App.css";

import StatusFilter from "./components/StatusFilter/StatusFilter";
import Tickets from "./components/Tickets/Tickets";

function App() {
  const [sort, setSort] = useState('');
  console.log(sort);
  return (
    <main className="app container">
      <StatusFilter sort={sort} setSort={setSort}  />
      <Tickets data={DATA[0].result.flights} />
    </main>
  );
}

export default App;
