import "./Tickets.css";
import Ticket from "../Ticket/Ticket";

function Tickets({data}) {
  let tickets = data.slice(0,3);
  return (
    <section className="tickets">
      Tickets
      <ul>
        <Ticket tickets={tickets} />
      </ul>
    </section>
  );
}

export default Tickets;
