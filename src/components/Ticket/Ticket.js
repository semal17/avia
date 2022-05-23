import "./Ticket.css";

function Ticket({ tickets }) {
  console.log(tickets);
  let items = tickets.map((item, index) => (
    <li className="ticket" key={index}>
      <div className="ticket-top">
        <p className="ticket-top__name">Аэрофлот</p>
        <div className="ticket-top__wrapper">
          <span className="ticket-top__price">21049 Р</span>
          <p className="ticket-top__for">Стоимость для одного пассажира</p>
        </div>
      </div>

      <ul className="ticket-list">
        <li className="ticket-item">
          <div className="ticket-item__city">
            <p className="ticket-item__city-name">
              Москва<span className="ticket-item__city-airport">(SVO)</span> -
              Лондон<span>(LHR)</span>
            </p>
          </div>

          <div className="ticket-item__time">
            <p className="ticket-item__time-time">
              20:40 <span className="ticket-item__time-date">18 авг. вт</span>
            </p>
            <p className="ticket-item__time-fly">14 ч 45 мин</p>
            <p className="ticket-item__time-time">
              <span className="ticket-item__time-date">18 авг. вт</span> 20:40
            </p>
          </div>

          <span className="ticket-item__legs">1 пересадка</span>
        <p className="ticket-item__aviacompany">Рейс выполняет: Аэрофлот</p>
        </li>
      </ul>
    </li>
  ));

  return <>{items}</>;
}

export default Ticket;
