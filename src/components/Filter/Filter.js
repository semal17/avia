import "./Filter.css";

function Filter({ segments, setSegments }) {
  function handleChange (event) {
    let copy = [...segments]
    const value = event.target.value

    if (segments.includes(value)) {
      const result = copy.filter(item => item !== value)

      setSegments(result)
    } else {
      copy.push(value)

      setSegments(copy)
    }
  }

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
              value="one"
              onChange={handleChange}
              checked={segments.includes('one')}
            />
            - 1 пересадка
          </label>
          <label className="filter-form__label" htmlFor="without">
            <input
              className="filter-form__input"
              type="checkbox"
              id="without"
              name="filter"
              value="none"
              onChange={handleChange}
              checked={segments.includes('none')}
            />
            - без пересадок
          </label>
        </div>
      </form>
    </div>
  );
}

export default Filter;
