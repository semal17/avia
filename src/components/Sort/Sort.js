import "./Sort.css";

function Sort({ sort, setSort }) {
  function handleChange(event) {
    setSort(event.target.value);
  }

  return (
    <div className="sort">
      <form className="sort-form">
        <p className="sort-form__name">Сортировать</p>
        <div className="sort-form__wrapper">
          <label className="sort-form__label" htmlFor="priceUp">
            <input
              className="sort-form__input"
              type="radio"
              id="priceUp"
              name="sort"
              value="price-asc"
              onChange={handleChange}
              checked={sort === "price-asc"}
            />
            - по возрастанию цены
          </label>
          <label className="sort-form__label" htmlFor="priceDown">
            <input
              className="sort-form__input"
              type="radio"
              id="priceDown"
              name="sort"
              value="price-desc"
              onChange={handleChange}
              checked={sort === "price-desc"}
            />
            - по убыванию цены
          </label>
          <label className="sort-form__label" htmlFor="time">
            <input
              className="sort-form__input"
              type="radio"
              id="time"
              name="sort"
              value="time"
              onChange={handleChange}
              checked={sort === "time"}
            />
            - по времени в пути
          </label>
        </div>
      </form>
    </div>
  );
}

export default Sort;
