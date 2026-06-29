import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Spinner from "../components/common/Spinner";
import PropertyGrid from "../components/property/PropertyGrid";
import PropertyFilters from "../components/property/PropertyFilters";
import Pagination from "../components/property/Pagination";
import EmptyState from "../components/property/EmptyState";

import { getProperties } from "../services/propertyService";
import "../styles/properties.css";

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const filters = {
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    status: searchParams.get("status") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    sort: searchParams.get("sort") || "latest",
  };

  useEffect(() => {
    fetchProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const page = Number(searchParams.get("page")) || 1;
      const data = await getProperties({ ...filters, page });

      // ✅ if API returns an array directly
      if (Array.isArray(data)) {
        setProperties(data);
        setCurrentPage(1);
        setTotalPages(1);
      } else {
        // ✅ if API returns an object with properties array
        setProperties(data.properties || []);
        setCurrentPage(data.currentPage || 1);
        setTotalPages(data.totalPages || 1);
      }
    } catch (error) {
      console.error(error);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilters = (newFilters) => {
    const params = {};
    Object.keys(newFilters).forEach((key) => {
      if (newFilters[key]) {
        params[key] = newFilters[key];
      }
    });
    params.page = 1;
    setSearchParams(params);
  };

  const handlePageChange = (page) => {
    const params = Object.fromEntries(searchParams.entries());
    params.page = page;
    setSearchParams(params);
  };

  return (
    <section className="properties-page">
      <div className="container">
        <h1>Properties</h1>
        <p>Browse our available properties.</p>

        <PropertyFilters filters={filters} onChange={handleFilters} />

        {loading ? (
          <Spinner />
        ) : properties.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <PropertyGrid properties={properties} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default Properties;
