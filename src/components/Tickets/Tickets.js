import { useEffect} from 'react';

import "./Tickets.css";
import Ticket from "../Ticket/Ticket";
import Button from "../Button/Button";

function Tickets({tickets}) {

  
  return (
    <section className="tickets">
      <ul>
        <Ticket tickets={tickets} />
      </ul>
      <Button />
    </section>
  );
}

export default Tickets;
