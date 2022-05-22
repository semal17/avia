import "./StatusFilter.css";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import Price from "../Price/Price";
import Company from "../Company/Company";

function StatusFilter() {
  
  return (
    <section className="status">
      StatusFilter
      <Sort />
      <Filter />
      <Price />
      <Company />
    </section>
  );
}

export default StatusFilter;
