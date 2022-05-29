import "./Company.css";

function Company() {
  return <div className="company">
  <form className="company-form">
    <p className="company-form__name">Авиакомпании</p>
    <div className="company-form__wrapper">
      <label className="company-form__label" for="lot">
        <input
          className="company-form__input"
          type="checkbox"
          id="lot"
          name="company"
          value="lot"
        />
        - Lot Polish Airlines от 21049 р.
      </label>
      <label className="company-form__label" for="aer">
        <input
          className="company-form__input"
          type="checkbox"
          id="aer"
          name="company"
          value="aer"
        />
        - Аэрофлот - рос. авиалинии от 31733 р.
      </label>      
    </div>
  </form>
</div>;;
}

export default Company;