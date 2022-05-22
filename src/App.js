import { DATA } from "./flights.js";
import "./App.css";

import StatusFilter from "./components/StatusFilter/StatusFilter";
import Tickets from "./components/Tickets/Tickets";

function App() {
  return (
    <main className="app container">
      <StatusFilter  />
      <Tickets data={DATA[0].result.flights} />
    </main>
  );
}

export default App;
