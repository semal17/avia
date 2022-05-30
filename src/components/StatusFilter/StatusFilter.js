import "./StatusFilter.css";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import Price from "../Price/Price";
import Company from "../Company/Company";

function StatusFilter({sort, setSort}) {
  return (
    <section className="status">
      <Sort sort={sort} setSort={setSort} />
      <Filter />
      <Price />
      <Company />
    </section>
  );
}

export default StatusFilter;
