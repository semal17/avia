import { useEffect } from "react";

import "./Ticket.css";

function Ticket({ tickets }) {
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];
  const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

  // console.log(tickets[0].flight.carrier.uid);

  let items = tickets.slice(0, 5).map((item) => (
      <li className="ticket" key={item.flightToken}>
        <div className="ticket-top">
          <p className="ticket-top__name">{item.flight.carrier.caption}</p>
          <div className="ticket-top__wrapper">
            <span className="ticket-top__price">
              {item.flight.price.total.amount} Р
            </span>
            <p className="ticket-top__for">Стоимость для одного пассажира</p>
          </div>
        </div>

        <ul className="ticket-list">
          {item.flight.legs.map((items) => (
            <li className="ticket-item" key={items.duration}>
              <div className="ticket-item__city">
                <p className="ticket-item__city-name">
                  {items.segments[0].departureCity.caption},{" "}
                  {items.segments[0].departureAirport.caption}
                  <span className="ticket-item__city-airport">
                    ({items.segments[0].departureAirport.uid})
                  </span>{" "}
                  -
                  {items.segments.length === 2
                    ? items.segments[1].arrivalCity.caption
                    : items.segments[0].arrivalCity.caption}
                  ,{" "}
                  {items.segments.length === 2
                    ? items.segments[1].arrivalAirport.caption
                    : items.segments[0].arrivalAirport.caption}
                  <span className="ticket-item__city-airport">
                    (
                    {items.segments.length === 2
                      ? items.segments[1].arrivalAirport.uid
                      : items.segments[0].arrivalAirport.uid}
                    )
                  </span>
                </p>
              </div>

              <div className="ticket-item__time">
                <p className="ticket-item__time-time">
                  {items.segments[0].departureDate.slice(11, 16)}{" "}
                  <span className="ticket-item__time-date">
                    {items.segments[0].departureDate.slice(8, 10)}{" "}
                    {months[items.segments[0].departureDate.slice(6, 7) - 1]}.{" "}
                    {days[new Date(items.segments[0].departureDate).getDay()]}
                  </span>
                </p>
                <p className="ticket-item__time-fly">
                  {Math.trunc(items.duration / 60)} ч{" "}
                  {Math.round(
                    (items.duration / 60 - Math.trunc(items.duration / 60)) *
                      0.6 *
                      100
                  )}{" "}
                  мин
                </p>
                <p className="ticket-item__time-time">
                  <span className="ticket-item__time-date">
                    {items.segments.length === 2
                      ? items.segments[1].arrivalDate.slice(8, 10)
                      : items.segments[0].arrivalDate.slice(8, 10)}{" "}
                    {items.segments.length === 2
                      ? months[items.segments[1].arrivalDate.slice(6, 7) - 1]
                      : months[items.segments[0].arrivalDate.slice(6, 7) - 1]}
                    .{" "}
                    {items.segments.length === 2
                      ? days[new Date(items.segments[1].arrivalDate).getDay()]
                      : days[new Date(items.segments[0].arrivalDate).getDay()]}
                  </span>{" "}
                  {items.segments.length === 2
                    ? items.segments[1].arrivalDate.slice(11, 16)
                    : items.segments[0].arrivalDate.slice(11, 16)}
                </p>
              </div>
              <span className="ticket-item__legs">
                {items.segments.length === 2 ? "1 пересадка" : ""}
              </span>
              <p className="ticket-item__aviacompany">
                Рейс выполняет: {items.segments[0].airline.caption}
              </p>
            </li>
          ))}

          <button className="ticket-btn">Выбрать</button>
        </ul>
      </li>
    ));

  return <>{items}</>;
}

export default Ticket;
