import "./Company.css";

function Company({ companies, setCompanies }) {
  function handleChange (event) {
    let copy = [...companies]
    const value = event.target.value

    if (companies.includes(value)) {
      const result = copy.filter(item => item !== value)

      setCompanies(result)
    } else {
      copy.push(value)

      setCompanies(copy)
    }
  }

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
              value="LO"
              onChange={handleChange}
              checked={companies.includes('LO')}
            />
            - Lot Polish Airlines от 21049 р.
          </label>
          <label className="company-form__label" htmlFor="aer">
            <input
              className="company-form__input"
              type="checkbox"
              id="aer"
              name="company"
              value="SU1"
              onChange={handleChange}
              checked={companies.includes('SU1')}
            />
            - Аэрофлот - рос. авиалинии от 31733 р.
          </label>
        </div>
      </form>
    </div>
  );
}

export default Company;
