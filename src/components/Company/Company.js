import "./Company.css";

function Company({ company, setCompany }) {
  let changeCompany = (e) => {
    if (e.target.id === "lot" && e.target.checked) {
      setCompany(company + 1);
    } else if (e.target.id === "aer" && e.target.checked) {
      setCompany(company + 2);
    } else if (e.target.id === "lot" && e.target.checked === false) {
      setCompany(company - 1);
    } else if (e.target.id === "aer" && e.target.checked === false) {
      setCompany(company - 2);
    }
  };

  return (
    <div className="company">
      <form className="company-form">
        <p className="company-form__name">Авиакомпании</p>
        <div className="company-form__wrapper">
          <label className="company-form__label" htmlFor="lot">
            <input
              className="company-form__input"
              type="checkbox"
              id="lot"
              name="company"
              value="lot"
              onChange={changeCompany}
            />
            - Lot Polish Airlines от 21049 р.
          </label>
          <label className="company-form__label" htmlFor="aer">
            <input
              className="company-form__input"
              type="checkbox"
              id="aer"
              name="company"
              value="aer"
              onChange={changeCompany}
            />
            - Аэрофлот - рос. авиалинии от 31733 р.
          </label>
        </div>
      </form>
    </div>
  );
}

export default Company;
