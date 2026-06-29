import { useState } from "react";

import "../../styles/searchBar.css";

function SearchBar() {

  const [filters, setFilters] = useState({

    location: "",

    type: "",

    price: ""

  });

  const handleChange = (e) => {

    setFilters({

      ...filters,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(filters);

    // Later:
    // Navigate to /properties with query parameters

  };

  return (

    <section className="search-section">

      <form

        className="search-box"

        onSubmit={handleSubmit}

      >

        <input

          type="text"

          name="location"

          placeholder="Location"

          value={filters.location}

          onChange={handleChange}

        />

        <select

          name="type"

          value={filters.type}

          onChange={handleChange}

        >

          <option value="">

            Property Type

          </option>

          <option value="house">

            House

          </option>

          <option value="apartment">

            Apartment

          </option>

          <option value="commercial">

            Commercial

          </option>

        </select>

        <input

          type="number"

          name="price"

          placeholder="Maximum Price"

          value={filters.price}

          onChange={handleChange}

        />

        <button type="submit">

          Search

        </button>

      </form>

    </section>

  );

}

export default SearchBar;