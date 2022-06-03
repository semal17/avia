import "./Price.css";

function Price({priceFrom, setPriceFrom, priceTo, setPriceTo}) {

  let inputChangeFrom = (e) => {
    if(e.target.value === "") {
      setPriceFrom(0);
    } else {
      setPriceFrom(Number(e.target.value));
    }


  }

  let inputChangeTo = (e) => {
    if(e.target.value === "") { 
      setPriceTo(1000000);      
    } else {
      setPriceTo(Number(e.target.value));
    }
    
  }


  return (
    <div className="price">
      <p className="price__text">Цена</p>
      <label className="price__label" htmlFor="from">
        От
        <input
          className="price__input"
          type="number"
          id="from"
          name="from"
          placeholder="0"
          onChange={inputChangeFrom}
        ></input>
      </label>

      <label className="price__label" htmlFor="to">
        До
        <input
          className="price__input"
          type="number"
          id="to"
          name="to"
          placeholder="1000000"
          onChange={inputChangeTo}
        ></input>
      </label>
    </div>
  );
}

export default Price;
