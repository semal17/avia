import "./Filter.css";

function Filter() {
  return <div className="filter">
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
        />
        - без пересадок
      </label>      
    </div>
  </form>
</div>;
}

export default Filter;