import "./Price.css";

function Price() {
  return (
    <div className="price">
      <p className="price__text">Цена</p>
      <label className="price__label" for="from">
        От
        <input
          className="price__input"
          type="text"
          id="from"
          name="from"
          placeholder="0"
        ></input>
      </label>

      <label className="price__label" for="to">
        До
        <input
          className="price__input"
          type="text"
          id="to"
          name="to"
          placeholder="1000000"
        ></input>
      </label>
    </div>
  );
}

export default Price;
