import { useEffect, useState } from "react";

import Spinner from "./Spinner";
import ImageUpload from "../components/ImageUpload";
import AdminLayout
from "../layouts/AdminLayout";

import {
  createLand,
  updateLand
} from "../services/landService";

function AddLandForm({ onSuccess, editingLand }) {

  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    acreage: "",
    description: "",
    featured: false,
    status: "Available"
  });

  useEffect(() => {

    if (editingLand) {

      setForm({
        title: editingLand.title || "",
        location: editingLand.location || "",
        price: editingLand.price || "",
        acreage: editingLand.acreage || "",
        description: editingLand.description || "",
        featured: editingLand.featured || false,
        status: editingLand.status || "Available"
      });

      setImages(editingLand.images || []);

    } else {

      setForm({
        title: "",
        location: "",
        price: "",
        acreage: "",
        description: "",
        featured: false,
        status: "Available"
      });

      setImages([]);

    }

  }, [editingLand]);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

  };

  const handleImageUpload = (url) => {

    setImages((prev) => [...prev, url]);

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const token = localStorage.getItem("token");

      if (editingLand) {

        await updateLand(
          editingLand._id,
          {
            ...form,
            images
          },
          token
        );

        alert("Land Updated Successfully");

      } else {

        await createLand(
          {
            ...form,
            images
          },
          token
        );

        alert("Land Created Successfully");

      }

      setForm({
        title: "",
        location: "",
        price: "",
        acreage: "",
        description: "",
        featured: false,
        status: "Available"
      });

      setImages([]);

      if (onSuccess) {
        onSuccess();
      }

    } catch (error) {

      console.log(error);

      alert("Operation Failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <AdminLayout>

    <form onSubmit={handleSubmit}>

      <h2>
        {editingLand ? "Edit Land" : "Add Land"}
      </h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />

      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />

      <input
        name="acreage"
        value={form.acreage}
        onChange={handleChange}
        placeholder="Acreage (e.g. 1/4 Acre)"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <label>
        Featured

        <input
          type="checkbox"
          name="featured"
          checked={form.featured}
          onChange={handleChange}
        />
      </label>

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option value="Available">Available</option>
        <option value="Reserved">Reserved</option>
        <option value="Sold">Sold</option>
      </select>

      <ImageUpload
        onUpload={handleImageUpload}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "15px"
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Land"
            style={{
              width: "120px",
              height: "90px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        ))}
      </div>

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <Spinner />
        ) : editingLand ? (
          "Update Land"
        ) : (
          "Save Land"
        )}
      </button>

    </form>
</AdminLayout>
  );
  

}

export default AddLandForm;