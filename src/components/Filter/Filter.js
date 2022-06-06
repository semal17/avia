import "./Filter.css";

function Filter({ filter, setFilter }) {
  let changeInput = (e) => {
    if (e.target.defaultValue === "1" && e.target.checked) {
      setFilter(filter + 1);
    } else if (e.target.defaultValue === "0" && e.target.checked) {
      setFilter(filter + 2);
    } else if (e.target.defaultValue === "1" && e.target.checked === false) {
      setFilter(filter - 1);
    } else if (e.target.defaultValue === "0" && e.target.checked === false) {
      setFilter(filter - 2);
    }
  };

  return (
    <div className="filter">
      <form className="filter-form">
        <p className="filter-form__name">Фильтровать</p>
        <div className="filter-form__wrapper">
          <label className="filter-form__label" htmlFor="single">
            <input
              className="filter-form__input"
              type="checkbox"
              id="single"
              name="filter"
              value="1"
              onChange={changeInput}
            />
            - 1 пересадка
          </label>
          <label className="filter-form__label" htmlFor="without">
            <input
              className="filter-form__input"
              type="checkbox"
              id="without"
              name="filter"
              value="0"
              onChange={changeInput}
            />
            - без пересадок
          </label>
        </div>
      </form>
    </div>
  );
}

export default Filter;
