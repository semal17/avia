import "./Ticket.css";

function Ticket({ tickets }) {
  console.log(tickets[0]);
  let items = tickets.map(item => (
    <li className="ticket" key={item.flightToken}>
      <div className="ticket-top">
        <p className="ticket-top__name">{item.flight.carrier.caption}</p>
        <div className="ticket-top__wrapper">
          <span className="ticket-top__price">{item.flight.price.total.amount} Р</span>
          <p className="ticket-top__for">Стоимость для одного пассажира</p>
        </div>
      </div>

      <ul className="ticket-list">
       {item.flight.legs.map( item => (
        <li className="ticket-item" key={item.duration}>
          <div className="ticket-item__city">
            <p className="ticket-item__city-name">
              Москва<span className="ticket-item__city-airport">(SVO)</span> -
              Лондон<span className="ticket-item__city-airport">(LHR)</span>
            </p>
          </div>

          <div className="ticket-item__time">
            <p className="ticket-item__time-time">
              20:40 <span className="ticket-item__time-date">18 авг. вт</span>
            </p>
            <p className="ticket-item__time-fly">{Math.trunc(item.duration / 60)} ч {Math.round((((item.duration / 60) - Math.trunc(item.duration / 60))*0.6)*100)} мин</p>
            <p className="ticket-item__time-time">
              <span className="ticket-item__time-date">18 авг. вт</span> 20:40
            </p>
          </div>
          <span className="ticket-item__legs">{item.segments.length === 2 ? 1 : 0} пересадка</span>
          <p className="ticket-item__aviacompany">Рейс выполняет: {item.segments[0].airline.caption}</p>
        </li>
       ))}
          
        
        <button className="ticket-btn">Выбрать</button>
      </ul>
    </li>
  ));

  return <>{items}</>;
}

export default Ticket;
