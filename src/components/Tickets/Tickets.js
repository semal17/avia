import "./Tickets.css";
import Ticket from "../Ticket/Ticket";
import Button from "../Button/Button";

function Tickets({data}) {
  let tickets = data.slice(0,3);
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
