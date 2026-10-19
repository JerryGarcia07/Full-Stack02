import React from "react";
import Pagination from "../components/Pagination";
import SearchFormSection from "../components/SearchFormSection";
import JobListings from "../components/JobListings";

const Empleado = () => {
  return (
    <main>
      <section className="jobs-search">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>

        <SearchFormSection />

        <span id="filter-selected-value"></span>
      </section>

      <section>
        <JobListings />

        <Pagination currentPage={1} totalPages={8} />
      </section>
    </main>
  );
};

export default Empleado;
