import "./Ticket.css";

function Ticket({ tickets }) {
  let items = tickets.map((item, index) => (
    <li className="ticket" key={index}>
      Ticket
    </li>
  ));

  return <>{items}</>;
}

export default Ticket;
