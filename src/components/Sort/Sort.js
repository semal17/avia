import "./Sort.css";

function Sort() {
  let formChange = (e) => {
    console.log(e.target.closest('label').htmlFor);
  }
  return (
    <div className="sort">
      <form className="sort-form">
        <p className="sort-form__name">Сортировать</p>
        <div className="sort-form__wrapper" onClick={formChange}>
          <label className="sort-form__label" for="priceUp">
            <input
              className="sort-form__input"
              type="radio"
              id="priceUp"
              name="sort"
              value="up"
            />
            - по возрастанию цены
          </label>
          <label className="sort-form__label" for="priceDown">
            <input
              className="sort-form__input"
              type="radio"
              id="priceDown"
              name="sort"
              value="down"
            />
            - по убыванию цены
          </label>
          <label className="sort-form__label" for="time">
            <input
              className="sort-form__input"
              type="radio"
              id="time"
              name="sort"
              value="time"
            />
            - по времени в пути
          </label>
        </div>
      </form>
    </div>
  );
}

export default Sort;
