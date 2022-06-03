import "./StatusFilter.css";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import Price from "../Price/Price";
import Company from "../Company/Company";

function StatusFilter({
  sort,
  setSort,
  filter,
  setFilter,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  company,
  setCompany,
}) {
  return (
    <section className="status">
      <Sort sort={sort} setSort={setSort} />
      <Filter filter={filter} setFilter={setFilter} />
      <Price
        priceFrom={priceFrom}
        setPriceFrom={setPriceFrom}
        priceTo={priceTo}
        setPriceTo={setPriceTo}
      />
      <Company company={company} setCompany={setCompany} />
    </section>
  );
}

export default StatusFilter;
