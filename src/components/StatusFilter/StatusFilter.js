import "./StatusFilter.css";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import Price from "../Price/Price";
import Company from "../Company/Company";

function StatusFilter({
  sort,
  setSort,
  segments,
  setSegments,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  companies,
  setCompanies,
}) {
  return (
    <section className="status">
      <Sort sort={sort} setSort={setSort} />
      <Filter segments={segments} setSegments={setSegments} />
      <Price
        priceFrom={priceFrom}
        setPriceFrom={setPriceFrom}
        priceTo={priceTo}
        setPriceTo={setPriceTo}
      />
      <Company companies={companies} setCompanies={setCompanies} />
    </section>
  );
}

export default StatusFilter;
