import { useState, useEffect } from "react";

import "../../styles/propertyFilters.css";

function PropertyFilters({

    filters,

    onChange

}) {

    const [form, setForm] = useState(filters);

    useEffect(() => {

        setForm(filters);

    }, [filters]);

    const handleChange = (e) => {

        const {

            name,

            value

        } = e.target;

        const updated = {

            ...form,

            [name]: value

        };

        setForm(updated);

        onChange(updated);

    };

    return (

        <div className="property-filters">

            <input

                type="text"

                name="location"

                placeholder="Location"

                value={form.location}

                onChange={handleChange}

            />

            <select

                name="type"

                value={form.type}

                onChange={handleChange}

            >

                <option value="">

                    All Types

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

            <select

                name="status"

                value={form.status}

                onChange={handleChange}

            >

                <option value="">

                    Any Status

                </option>

                <option value="Available">

                    Available

                </option>

                <option value="Reserved">

                    Reserved

                </option>

                <option value="Sold">

                    Sold

                </option>

            </select>

            <input

                type="number"

                name="maxPrice"

                placeholder="Maximum Price"

                value={form.maxPrice}

                onChange={handleChange}

            />

            <select

                name="sort"

                value={form.sort}

                onChange={handleChange}

            >

                <option value="latest">

                    Latest

                </option>

                <option value="oldest">

                    Oldest

                </option>

                <option value="priceAsc">

                    Price Low → High

                </option>

                <option value="priceDesc">

                    Price High → Low

                </option>

            </select>

        </div>

    );

}

export default PropertyFilters;