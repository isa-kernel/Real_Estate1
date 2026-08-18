import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaUserPlus } from "react-icons/fa";

import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/common/Spinner";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [ name ]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (formData.password.length < 6) {
      setError("Your password must have at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      // Supports automatic login if your API returns a token after registration.
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        navigate("/dashboard");
        return;
      }

      navigate("/login", {
        state: { message: "Account created successfully. You can now sign in." },
      });
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
        "We could not create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-icon">
          <FaUserPlus />
        </div>

        <p className="auth-eyebrow">CREATE ADMIN ACCOUNT</p>
        <h1>Let’s get started.</h1>
        <p className="auth-intro">
          Create an account to manage your agency from one place.
        </p>

        {error && (
          <p className="auth-message error" role="alert">
            {error}
          </p>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              minLength="6"
              required
            />
          </label>

          <label>
            Confirm password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              minLength="6"
              required
            />
          </label>

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? <Spinner /> : <>Create account <FaArrowRight /></>}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;